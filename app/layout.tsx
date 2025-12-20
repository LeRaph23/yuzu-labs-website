import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yuzu Labs',
  description: 'Application de Fitness et Bien-être',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

