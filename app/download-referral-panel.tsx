'use client';

import { useSearchParams } from 'next/navigation';

const webAppHref =
  'https://mpstecnologia10.github.io/mpstecnologia.github.io/app/';

export function DownloadReferralPanel() {
  const searchParams = useSearchParams();
  const receivedCode = searchParams.get('ref')?.trim().toUpperCase() ?? '';
  const referralCode = /^[A-Z0-9]{4,32}$/.test(receivedCode)
    ? receivedCode
    : '';

  const attributedWebAppHref = referralCode
    ? `${webAppHref}?cadastro=1&ref=${encodeURIComponent(referralCode)}`
    : `${webAppHref}?cadastro=1`;

  return (
    <div className="hero-actions" id="download">
      <a className="button primary" href={attributedWebAppHref}>
        Criar conta
      </a>
      {!referralCode && (
        <a className="button secondary" href={webAppHref}>
          Já tenho conta
        </a>
      )}
    </div>
  );
}
