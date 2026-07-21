'use client';

import { useEffect, useState } from 'react';

const downloadHref =
  'https://github.com/mpstecnologia10/mpstecnologia.github.io/releases/latest/download/minha-comissao.apk';

export function DownloadReferralPanel() {
  const [referralCode, setReferralCode] = useState('');

  useEffect(() => {
    const code =
      new URLSearchParams(window.location.search)
        .get('ref')
        ?.trim()
        .toUpperCase() ?? '';
    setReferralCode(code);
  }, []);

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
            <span>Use este código no cadastro para vincular a indicação.</span>
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
        <p className="download-note">
          No primeiro uso, o Android pode pedir autorização para instalar apps
          baixados pelo navegador.
        </p>
      </div>
    </section>
  );
}
