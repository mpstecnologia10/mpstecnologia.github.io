import { Suspense } from 'react';

import { DownloadReferralPanel } from './download-referral-panel';

const assetBasePath = process.env.GITHUB_ACTIONS === 'true'
  ? '/mpstecnologia.github.io'
  : '';

const whatsappHref =
  'https://wa.me/5566999949841?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20app%20Minha%20Comiss%C3%A3o.';
const emailHref = 'mailto:mpstecnologia10@gmail.com';

const features = [
  {
    eyebrow: 'Comissionado',
    title: 'Lançamentos por tipo de comissão',
    text:
      'Frete por Ton. Bruta, Frete por Ton. Líquida com descontos, frete bruto, frete líquido, km rodado ou valor fixo em uma rotina limpa e rápida.',
  },
  {
    eyebrow: 'Autônomo',
    title: 'Viagens, despesas e lucro',
    text:
      'Receitas, despesas da viagem, consumo e relatório mensal em uma leitura prática no celular.',
  },
  {
    eyebrow: 'Acesso',
    title: 'Teste grátis e renovação',
    text:
      'Comece pelo teste grátis e escolha o plano que combina com a sua rotina quando quiser continuar.',
  },
  {
    eyebrow: 'Relatórios',
    title: 'PDF, compartilhar e imprimir',
    text:
      'O resultado sai pronto para abrir, compartilhar ou imprimir no Android, iPhone, iPad e computador.',
  },
  {
    eyebrow: 'Modo offline',
    title: 'Lançamentos mesmo sem sinal',
    text:
      'Comissões e viagens podem ser registradas sem internet e sincronizadas automaticamente quando a conexão voltar.',
  },
];

const plans = [
  {
    name: 'Mensal',
    amount: 'R$ 24,90',
    detail: '30 dias de acesso',
    accent: 'Mais flexível',
  },
  {
    name: 'Trimestral',
    amount: 'R$ 59,90',
    detail: '90 dias de acesso',
    accent: 'Bom custo por ciclo',
  },
  {
    name: 'Semestral',
    amount: 'R$ 94,90',
    detail: '180 dias de acesso',
    accent: 'Mais estabilidade',
  },
  {
    name: 'Anual',
    amount: 'R$ 149,90',
    detail: '365 dias de acesso',
    accent: 'Melhor valor total',
  },
];

const steps = [
  {
    number: '01',
    title: 'Entre ou crie sua conta',
    text:
      'Use sua conta Google para começar de forma rápida e segura.',
  },
  {
    number: '02',
    title: 'Registre seu trabalho',
    text: 'Lance comissões, viagens, despesas e consumo em poucos passos.',
  },
  {
    number: '03',
    title: 'Acompanhe seus resultados',
    text:
      'Consulte resumos e relatórios e compartilhe o PDF quando precisar.',
  },
];

export default function Home() {
  return (
    <main className="page">
      <div className="shell">
        <header className="topbar">
          <div className="brand">
            <img
              src={`${assetBasePath}/app-icon.png`}
              alt="Ícone do app Minha Comissão"
              width={44}
              height={44}
              className="brand-icon"
            />
            <div className="brand-copy">
              <strong>Minha Comissão</strong>
              <span>Gestão simples para motoristas e transportadores</span>
            </div>
          </div>

          <nav className="topnav">
            <a href="#produto">Produto</a>
            <a href="#download">Começar</a>
            <a href="#planos">Planos</a>
            <a href="#contato">Contato</a>
          </nav>
        </header>

        <section className="hero">
          <div className="hero-panel">
            <div className="hero-grid">
              <div className="hero-content">
                <div className="eyebrow">
                  Feito para a rotina na estrada
                </div>
                <h1>Minha Comissão</h1>
                <p className="lead">
                  Controle comissões, viagens, despesas e consumo em um só
                  lugar, com leitura rápida, relatórios confiáveis e menos
                  trabalho manual no dia a dia.
                </p>

                <div className="hero-points">
                  <span>Android, iPhone e computador</span>
                  <span>PDF pronto</span>
                  <span>Mercado Pago</span>
                  <span>Ajuda contextual</span>
                </div>

                <Suspense fallback={null}>
                  <DownloadReferralPanel />
                </Suspense>
              </div>

              <aside className="hero-console">
                <section className="console-card accent sage">
                  <strong>Lançamentos práticos</strong>
                  <span>
                    Registre a rotina com poucos campos e encontre tudo de
                    forma organizada.
                  </span>
                </section>

                <section className="console-card">
                  <strong>Relatórios e PDF</strong>
                  <span>
                    Abrir, compartilhar e imprimir saem do mesmo caminho no app.
                  </span>
                </section>

                <section className="console-card accent warm">
                  <strong>Acesso em qualquer tela</strong>
                  <span>
                    Use no Android, iPhone, iPad, notebook ou computador.
                  </span>
                </section>
              </aside>
            </div>
          </div>
        </section>

        <section className="section" id="produto">
          <div className="section-header">
            <h2>O que o app entrega</h2>
            <p>
              O layout foi pensado para quem trabalha na estrada e para quem
              administra a operação com pressa, mas precisa enxergar os dados
              com segurança.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((item) => (
              <article className="feature-card" key={item.title}>
                <div className="feature-eyebrow">{item.eyebrow}</div>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section offline-section" id="offline">
          <div className="offline-panel">
            <div className="section-header">
              <div className="feature-eyebrow">Funcionamento em campo</div>
              <h2>Modo offline reduzido</h2>
              <p>
                O motorista não precisa interromper o trabalho por falta de
                sinal. O app guarda os lançamentos permitidos no aparelho e
                envia tudo ao Supabase assim que a internet voltar.
              </p>
            </div>

            <div className="offline-grid">
              <article className="offline-card">
                <strong>Sem internet</strong>
                <span>
                  Registre comissões e viagens já disponíveis no aparelho. Os
                  dados locais ficam criptografados e vinculados à conta do
                  motorista até a sincronização.
                </span>
              </article>
              <article className="offline-card accent">
                <strong>Ao reconectar</strong>
                <span>
                  A fila é enviada automaticamente, com proteção contra
                  duplicidade. Se necessário, o usuário também pode revisar e
                  sincronizar manualmente os itens pendentes.
                </span>
              </article>
              <article className="offline-card">
                <strong>Limites claros</strong>
                <span>
                  Login, pagamentos, alterações administrativas e dados ainda
                  não carregados precisam de internet para funcionar.
                </span>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="planos">
          <div className="section-header">
            <h2>Escolha seu plano</h2>
            <p>
              Continue usando depois do teste grátis com o período que melhor
              combina com sua rotina.
            </p>
          </div>

          <div className="plan-grid">
            {plans.map((plan) => (
              <article className="plan-card" key={plan.name}>
                <div className="plan-top">
                  <strong>{plan.name}</strong>
                  <span>{plan.accent}</span>
                </div>
                <div className="plan-price">{plan.amount}</div>
                <div className="plan-detail">{plan.detail}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <h2>Fluxo simples</h2>
            <p>
              Do primeiro acesso ao relatório, tudo foi pensado para exigir
              poucos passos.
            </p>
          </div>

          <div className="step-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <div className="step-number">{step.number}</div>
                <strong>{step.title}</strong>
                <span>{step.text}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contato">
          <div className="contact-grid">
            <section className="contact-card">
              <strong>Contato comercial e suporte</strong>
              <span>
                Canal de apresentação do app, renovação, dúvidas operacionais e
                acompanhamento do uso.
              </span>

              <div className="contact-list">
                <div className="contact-item">
                  <div className="contact-icon">WA</div>
                  <div>
                    <small>WhatsApp</small>
                    <span>+55 66 99994-9841</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">@</div>
                  <div>
                    <small>E-mail</small>
                    <a href={emailHref}>mpstecnologia10@gmail.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">MEI</div>
                  <div>
                    <small>Responsável</small>
                    <span>MPS TECNOLOGIA · CNPJ 65.014.859/0001-03</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">MP</div>
                  <div>
                    <small>Pagamento</small>
                    <span>Mercado Pago integrado</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">GH</div>
                  <div>
                    <small>Publicação</small>
                    <span>GitHub Pages</span>
                  </div>
                </div>
              </div>

              <div className="hero-actions compact">
                <a
                  className="button primary"
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Solicitar atendimento
                </a>
              </div>
            </section>

          </div>
        </section>

        <footer className="footer">
          <div className="footer-line">
            Minha Comissão · MPS TECNOLOGIA · CNPJ 65.014.859/0001-03.
          </div>
        </footer>
      </div>
    </main>
  );
}
