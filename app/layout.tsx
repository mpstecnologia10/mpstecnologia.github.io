import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Minha Comissão | Controle para motoristas',
  description:
    'App para motoristas e transportadores acompanharem comissões, viagens, consumo, relatórios, campanhas e acesso em um só lugar.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
