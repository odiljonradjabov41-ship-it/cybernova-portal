import type { Metadata } from 'next';
import './globals.css';
import AlisaGlobalCompanion from '@/components/AlisaGlobalCompanion';

export const metadata: Metadata = {
  title: 'CYBERNOVA // AI Security Platform',
  description: 'Enterprise Cybersecurity & Express Domain Scanner',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {/* Barcha sahifalar (Home, Dashboard, etc.) */}
        {children}

        {/* Global Alisa AI Companion Vidjeti */}
        <AlisaGlobalCompanion />
      </body>
    </html>
  );
}