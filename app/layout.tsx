import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { DM_Sans, DM_Serif_Display } from '@next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { PostsProvider } from '@/context/PostContext';
config.autoAddCss = false;
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'BlogV',
    template: '%s | BlogV',
  },
  description: 'Generating your blog from using AI.',
};


const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-dm-serif',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
      </head>
      <body>
        <main
          className={`${dmSans.variable} ${dmSerifDisplay.variable} font-body`}
        >
          <UserProvider>
            <PostsProvider>
              {children}
            </PostsProvider>
          </UserProvider>
        </main>
      </body>
    </html>
  )
}
