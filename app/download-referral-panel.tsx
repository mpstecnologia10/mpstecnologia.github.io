'use client';

import { useEffect, useState } from 'react';

const webAppHref =
  'https://mpstecnologia10.github.io/mpstecnologia.github.io/app/';

export function DownloadReferralPanel() {
  const [referralCode, setReferralCode] = useState('');
  const [platform, setPlatform] = useState<'android' | 'ios' | 'desktop'>(
    'desktop',
  );

  useEffect(() => {
    const code =
      new URLSearchParams(window.location.search)
        .get('ref')
        ?.trim()
        .toUpperCase() ?? '';
    setReferralCode(/^[A-Z0-9]{4,32}$/.test(code) ? code : '');
    const userAgent = navigator.userAgent;
    setPlatform(
      /Android/i.test(userAgent)
        ? 'android'
        : /iPhone|iPad|iPod/i.test(userAgent)
          ? 'ios'
          : 'desktop',
    );
  }, []);

  const attributedWebAppHref = referralCode
    ? `${webAppHref}?cadastro=1&ref=${encodeURIComponent(referralCode)}`
    : `${webAppHref}?cadastro=1`;

  return (
    <section className="download-panel" id="download">
      <div>
        <div className="feature-eyebrow">Comece por aqui</div>
        <h2>Crie sua conta antes de instalar</h2>
        <p>
          Assim o cadastro e a indicação ficam protegidos. No Android, o APK é
          oferecido após o cadastro. No iPhone, iPad ou computador, o acesso
          continua pelo navegador.
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
            <span>Crie a conta e escolha seu perfil antes da instalação.</span>
          </div>
        )}

        <a className="button primary full" href={attributedWebAppHref}>
          {platform === 'android'
            ? 'Criar conta e baixar Android'
            : platform === 'ios'
              ? 'Criar conta no iPhone/iPad'
              : 'Criar conta no computador'}
        </a>
        <a className="button secondary full" href={webAppHref}>
          Já tenho conta — abrir versão Web
        </a>
        <p className="download-note">
          {platform === 'android'
            ? 'Depois do cadastro, o download do Android será iniciado e o uso continuará no aplicativo instalado.'
            : platform === 'ios'
              ? 'Depois do cadastro, use pelo Safari e adicione o Minha Comissão à Tela de Início.'
              : 'Depois do cadastro, use o Minha Comissão diretamente neste computador.'}{' '}
          O código recebido pelo link não poderá ser alterado.
        </p>
      </div>
    </section>
  );
}
