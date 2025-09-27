import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@/components/analytics';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Using Inter for display font as well

export const metadata: Metadata = {
  title: {
    default: 'Fundação Doe Sangue - Salve Vidas',
    template: '%s | Fundação Doe Sangue',
  },
  description: 'Participe da nossa missão de salvar vidas através da doação de sangue. Cadastre-se e agende sua doação online.',
  keywords: [
    'doação de sangue',
    'hemocentro',
    'salvar vidas',
    'doar sangue',
    'fundação',
    'sangue',
    'hemoterapia',
    'transfusão',
  ],
  authors: [{ name: 'Fundação Doe Sangue' }],
  creator: 'Fundação Doe Sangue',
  publisher: 'Fundação Doe Sangue',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://doesangue.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://doesangue.org',
    title: 'Fundação Doe Sangue - Salve Vidas',
    description: 'Participe da nossa missão de salvar vidas através da doação de sangue.',
    siteName: 'Fundação Doe Sangue',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fundação Doe Sangue',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fundação Doe Sangue - Salve Vidas',
    description: 'Participe da nossa missão de salvar vidas através da doação de sangue.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ef4444" />
        <meta name="msapplication-TileColor" content="#ef4444" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 5000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
