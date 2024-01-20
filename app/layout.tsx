import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NexttopLoader from 'nextjs-toploader';
import { meta } from '@/data/meta';
import GoogleAnalyTics from '@/scripts/GoogleAnalytics';
import Toaster from '@/shared/components/ui/toaster';
import { Interaction } from '@/shared/hooks';
import { cn } from '@/shared/lib/utils';
import '../shared/styles/global.css';
import Providers from './shared/Proivder';
export const metadata: Metadata = meta;

const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, 'bg-white')}
        suppressHydrationWarning={true}
      >
        <NexttopLoader key="next-loading" color="#5359f7" />
        <Interaction />
        <GoogleAnalyTics />
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
