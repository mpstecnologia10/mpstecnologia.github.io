'use client';

import { useEffect, useState } from 'react';

const downloadHref =
  'https://github.com/mpstecnologia10/mpstecnologia.github.io/releases/latest/download/minha-comissao.apk';
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
    ? `${webAppHref}?ref=${encodeURIComponent(referralCode)}`
    : webAppHref;
  const attributedAndroidHref = referralCode
    ? `minhacomissao://referral?ref=${encodeURIComponent(referralCode)}`
    : '';

  return (
    <section className="download-panel" id="download">
      <div>
        <div className="feature-eyebrow">Download Android</div>
        <h2>Baixe a versão mais recente</h2>
        <p>
          O APK fica publicado no GitHub Releases. Quando houver atualização, o
          botão aponta sempre para a versão marcada como mais recente.
        </p>
      </div>

      <div className="download-card">
        {referralCode ? (
          <div className="referral-box">
            <small>Código de indicação recebido</small>
            <strong>{referralCode}</strong>
            <span>
              O app preencherá este código automaticamente e não permitirá
              alterações.
            </span>
          </div>
        ) : (
          <div className="referral-box neutral">
            <small>Instalação direta</small>
            <strong>Teste grátis</strong>
            <span>Após instalar, crie sua conta e escolha seu perfil.</span>
          </div>
        )}

        <a className="button primary full" href={downloadHref}>
          Baixar app Android
        </a>
        {referralCode ? (
          <a className="button secondary full" href={attributedAndroidHref}>
            Abrir app com indicação
          </a>
        ) : null}
        <a className="button secondary full" href={attributedWebAppHref}>
          Abrir no iPhone ou computador
        </a>
        <p className="download-note">
          No Android, instale o APK, volte a esta página e toque em “Abrir app
          com indicação”. O sistema pode pedir autorização para instalar o APK.
          No iPhone, abra a versão Web pelo Safari e adicione à Tela de Início.
        </p>
      </div>
    </section>
  );
}
