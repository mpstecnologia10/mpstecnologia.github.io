'use client';

import { MouseEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const webAppHref =
  'https://mpstecnologia10.github.io/mpstecnologia.github.io/app/';
const androidDownloadHref =
  'https://github.com/mpstecnologia10/mpstecnologia.github.io/releases/latest/download/minha-comissao.apk';

type Platform = 'android' | 'ios' | 'desktop';

export function DownloadReferralPanel() {
  const searchParams = useSearchParams();
  const [platform, setPlatform] = useState<Platform>('desktop');
  const receivedCode = searchParams.get('ref')?.trim().toUpperCase() ?? '';
  const referralCode = /^[A-Z0-9]{4,32}$/.test(receivedCode)
    ? receivedCode
    : '';

  const attributedWebAppHref = referralCode
    ? `${webAppHref}?cadastro=1&ref=${encodeURIComponent(referralCode)}`
    : `${webAppHref}?cadastro=1`;

  useEffect(() => {
    const agent = navigator.userAgent;
    if (/Android/i.test(agent)) {
      setPlatform('android');
    } else if (/iPhone|iPad|iPod/i.test(agent)) {
      setPlatform('ios');
    }
  }, []);

  const prepareAndroidInstall = async (
    event: MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();
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
