'use client';

import { useEffect, useState } from 'react';

const webAppHref =
  'https://mpstecnologia10.github.io/mpstecnologia.github.io/app/';

export function DownloadReferralPanel() {
  const [referralCode, setReferralCode] = useState('');

  useEffect(() => {
    const code =
      new URLSearchParams(window.location.search)
        .get('ref')
        ?.trim()
        .toUpperCase() ?? '';
    setReferralCode(/^[A-Z0-9]{4,32}$/.test(code) ? code : '');
  }, []);

  const attributedWebAppHref = referralCode
    ? `${webAppHref}?cadastro=1&ref=${encodeURIComponent(referralCode)}`
    : `${webAppHref}?cadastro=1`;

  return (
    <div className="hero-actions" id="download">
      <a className="button primary" href={attributedWebAppHref}>
        Criar conta
      </a>
      <a className="button secondary" href={webAppHref}>
        Já tenho conta
      </a>
    </div>
  );
}
