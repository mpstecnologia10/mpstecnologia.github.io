# Site institucional do Minha Comissão

Este diretório concentra a vitrine pública do produto: apresentação comercial,
planos, contato e apoio para ativação do Mercado Pago em produção.

## Abrir localmente

```bash
cd /home/servidor/development/minha_comissao/site
npm install
npm run dev
```

## Publicar no GitHub Pages

O `next.config.mjs` já usa `basePath` e `assetPrefix` para GitHub Pages.
Se o repositório público tiver outro nome, ajuste a constante `repoName`.

Fluxo sugerido:

1. faça commit do conteúdo desta pasta `site/`
2. deixe o workflow `deploy-pages.yml` publicar a pasta `out`
3. use a URL pública como referência comercial e técnica

## Uso sugerido

- site institucional oficial do app
- base para credenciais de produção do Mercado Pago
- link público para contato e divulgação
- página de apoio para futuras campanhas

## Próximo passo

- conectar domínio próprio quando fizer sentido
- incluir bloco de capturas do app
- incluir formulário de contato ou captura de lead
