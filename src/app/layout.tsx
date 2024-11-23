'use client';

import './globals.css';
import { Poppins } from '@next/font/google';

// Load font Poppins
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Pilih bobot font yang diinginkan
  variable: '--font-poppins', // Variabel CSS untuk Tailwind
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <main className="mx-auto flex w-full flex-col font-sans">{children}</main>
      </body>
    </html>
  );
}
