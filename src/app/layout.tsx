import type { Metadata } from 'next';
import '../styles/global.css';

import { Playfair_Display, Raleway } from 'next/font/google';

import Navbar from '@/components/navbar';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pack it up',
  description: 'Pack it up, and we will pack it up for you.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main
          className={`${playfair.variable} ${raleway.variable} antialiased`}>
          {children}
        </main>
      </body>
    </html>
  );
}
