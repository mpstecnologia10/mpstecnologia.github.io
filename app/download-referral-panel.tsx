'use client';

import { MouseEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const webAppHref =
  process.env.NEXT_PUBLIC_PWA_URL ||
  'https://mpstecnologia10.github.io/mpstecnologia.github.io/app/';
const androidDownloadHref =
  process.env.NEXT_PUBLIC_ANDROID_APK_URL ||
  'https://github.com/mpstecnologia10/mpstecnologia.github.io/releases/latest/download/minha-comissao.apk';

type Platform = 'android' | 'ios' | 'desktop';

const partnerCodePattern = /^P-[A-F0-9]{32}$/;

function trackPartnerVisit(code: string, event: 'link_click' | 'download_click') {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key || !partnerCodePattern.test(code)) return;

  try {
    const storageKey = `partner-visit:${code}`;
    let visit = sessionStorage.getItem(storageKey);
    if (!visit) {
      visit = crypto.randomUUID();
      sessionStorage.setItem(storageKey, visit);
    }
    void fetch(`${url}/rest/v1/rpc/record_partner_visit`, {
      method: 'POST',
      headers: { apikey: key, 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, visit, event }),
      keepalive: true,
    }).catch(() => {});
  } catch {
    // Tracking is optional when browser storage is unavailable.
  }
}

export function DownloadReferralPanel() {
  const searchParams = useSearchParams();
  const [platform, setPlatform] = useState<Platform>('desktop');
  const [copyMessage, setCopyMessage] = useState('');
  const receivedCode = searchParams.get('ref')?.trim().toUpperCase() ?? '';
  const referralCode =
    /^[A-Z0-9]{4,32}$/.test(receivedCode) || partnerCodePattern.test(receivedCode)
      ? receivedCode
      : '';

  const attributedWebAppHref = referralCode
    ? `${webAppHref}?cadastro=1&ref=${encodeURIComponent(referralCode)}`
    : `${webAppHref}?cadastro=1`;

  useEffect(() => {
    const agent = navigator.userAgent;
    if (/Android/i.test(agent)) {
      setPlatform('android');
    } else if (/iPhone|iPad|iPod/i.test(agent) ||
               (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
      setPlatform('ios');
    }
  }, []);

  useEffect(() => {
    trackPartnerVisit(referralCode, 'link_click');
  }, [referralCode]);

  const prepareAndroidInstall = async (
    event: MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();
    trackPartnerVisit(referralCode, 'download_click');
    if (referralCode && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(
          `MINHA_COMISSAO_REF=${referralCode}`,
        );
      } catch {
        // The verified link remains available as a fallback after install.
      }
    }
    window.location.assign(androidDownloadHref);
  };

  const androidAppHref = referralCode
    ? `minhacomissao://referral?ref=${encodeURIComponent(referralCode)}`
    : 'minhacomissao://auth-callback';

  if (platform === 'android') {
    return (
      <div className="hero-actions" id="download">
        {partnerCodePattern.test(referralCode) && (
          <div>
            <p>Código do parceiro: <code>{referralCode}</code></p>
            <button type="button" onClick={async () => {
              try {
                await navigator.clipboard.writeText(referralCode);
                setCopyMessage('Código copiado.');
              } catch {
                setCopyMessage('Selecione o código acima e copie.');
              }
            }}>Copiar código</button>
            <span role="status">{copyMessage}</span>
          </div>
        )}
        <a
          className="button primary"
          href={androidDownloadHref}
          onClick={prepareAndroidInstall}
        >
          Baixar aplicativo Android
        </a>
        <a className="button secondary" href={androidAppHref}>
          Já instalei — abrir aplicativo
        </a>
      </div>
    );
  }

  return (
    <div className="hero-actions" id="download">
      <a className="button primary" href={attributedWebAppHref}>
        {platform === 'ios' ? 'Usar no iPhone/iPad' : 'Criar conta'}
      </a>
      {!referralCode && (
        <a className="button secondary" href={webAppHref}>
          Já tenho conta
        </a>
      )}
    </div>
  );
}
