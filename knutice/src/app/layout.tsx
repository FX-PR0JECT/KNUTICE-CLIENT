'use client';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Registry as StyledComponentRegistry } from '@/styles/Registry';

const inter = Inter({ subsets: ['latin'] });

const queryClient = new QueryClient();

const metadata: Metadata = {
  title: 'KNUTICE',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <title>{metadata.title as string}</title>
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <StyledComponentRegistry>{children}</StyledComponentRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}
