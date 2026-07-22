import { Suspense } from 'react';

import { DownloadReferralPanel } from './download-referral-panel';

const assetBasePath = process.env.GITHUB_ACTIONS === 'true'
  ? '/mpstecnologia.github.io'
  : '';

const whatsappHref =
  'https://wa.me/5566999949841?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20app%20Minha%20Comiss%C3%A3o.';

const features = [
  {
    eyebrow: 'Comissionado',
    title: 'Lançamentos por tipo de comissão',
    text:
      'Frete por tonelada, por peso, frete líquido, km rodado ou valor fixo em uma rotina limpa e rápida.',
  },
  {
    eyebrow: 'Autônomo',
    title: 'Viagens, despesas e lucro',
    text:
      'Receitas, despesas da viagem, consumo e relatório mensal em uma leitura prática no celular.',
  },
  {
    eyebrow: 'Admin',
    title: 'Cobrança e acesso',
    text:
      'Painel para liberar, bloquear, renovar, aplicar promoções e gerenciar pagamentos com menos atrito.',
  },
  {
    eyebrow: 'Relatórios',
    title: 'PDF, compartilhar e imprimir',
    text:
      'O resultado sai pronto para abrir, compartilhar ou imprimir, no Android e com base pronta para iOS.',
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
    title: 'Instala e cria a conta',
    text: 'O usuário entra com teste grátis e já vê o app pronto para usar.',
  },
  {
    number: '02',
    title: 'Registra e acompanha',
    text: 'Os lançamentos entram no relatório e no resumo mensal com consistência.',
  },
  {
    number: '03',
    title: 'Renova ou indica',
    text: 'Mercado Pago, campanhas, descontos e indicação ficam centralizados.',
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
            <a href="#download">Download</a>
            <a href="#planos">Planos</a>
            <a href="#contato">Contato</a>
          </nav>
        </header>

        <section className="hero">
          <div className="hero-panel">
            <div className="hero-grid">
              <div className="hero-content">
                <div className="eyebrow">
                  Teste grátis, pagamento, relatórios e indicação
                </div>
                <h1>Minha Comissão</h1>
                <p className="lead">
                  Um app direto ao ponto para controlar comissões, viagens,
                  despesas, consumo e cobrança. O foco é dar leitura rápida,
                  relatório confiável e menos trabalho manual no dia a dia.
                </p>

                <div className="hero-points">
                  <span>Android e iOS</span>
                  <span>PDF pronto</span>
                  <span>Mercado Pago</span>
                  <span>Ajuda contextual</span>
                </div>

                <div className="hero-actions">
                  <a
                    className="button primary"
                    href="#download"
                  >
                    Baixar app
                  </a>
                  <a className="button secondary" href="#produto">
                    Ver o produto
                  </a>
                </div>
              </div>

              <aside className="hero-console">
                <section className="console-card accent sage">
                  <strong>Fluxo comercial</strong>
                  <span>
                    Teste grátis, renovação, campanha, indicação e acesso
                    bloqueado com liberação rápida.
                  </span>
                </section>

                <section className="console-card">
                  <strong>Relatórios e PDF</strong>
                  <span>
                    Abrir, compartilhar e imprimir saem do mesmo caminho no app.
                  </span>
                </section>

                <section className="console-card accent warm">
                  <strong>Administração</strong>
                  <span>
                    Painel para ajustar planos, textos de ajuda, campanhas e
                    pagamentos sem retrabalho.
                  </span>
                </section>
              </aside>
            </div>
          </div>
        </section>

        <Suspense fallback={null}>
          <DownloadReferralPanel />
        </Suspense>

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

        <section className="section" id="planos">
          <div className="section-header">
            <h2>Planos configuráveis</h2>
            <p>
              Valores e promoções ficam centralizados no painel administrativo,
              com possibilidade de campanha geral ou por usuário.
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
              A experiência foi desenhada para não virar um painel pesado.
              O usuário entra, registra e acompanha.
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

            <section className="contact-card muted">
              <strong>Pronto para evoluir</strong>
              <span>
                O app já nasceu com base para ajuda contextual, campanhas de
                indicação, termos de uso versionados e controle administrativo.
              </span>
              <div className="contact-note">
                A página também serve como referência para ativação de produção
                e para mostrar a proposta comercial do produto.
              </div>
            </section>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-line">
            Minha Comissão · controle de comissões, viagens, despesas,
            consumo, relatórios e acesso.
          </div>
        </footer>
      </div>
    </main>
  );
}
