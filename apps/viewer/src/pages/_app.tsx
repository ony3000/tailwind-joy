import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CssVarsProvider } from '@mui/joy/styles';
import { RootLayout } from '@/components/RootLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Viewer</title>
        <meta name="description" content="Viewer for visual comparisons" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssVarsProvider defaultMode="system">
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </CssVarsProvider>
    </>
  );
}
