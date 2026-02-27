import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: 'TimeTravel Agency | Tourisme Temporel de Luxe',
  description: 'La toute premiere agence de voyage temporel au monde. Explorez les civilisations anciennes, assistez aux grands moments de l\'histoire et voyagez vers le futur dans un luxe et une securite absolus.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={_playfair.variable}>
     <script src="//code.tidio.co/umkv4vkjr3lx729r7slyd3xjeqrehbtf.js" async></script>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main className="min-h-screen pt-16">{children}</main>
        <SiteFooter />
        <FloatingChat />
        <Analytics />
      </body>
    </html>
  )
}
