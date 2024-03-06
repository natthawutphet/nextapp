import '@/styles/globals.css';
import '@/styles/style.css';
import '@/styles/style1.css';
import '@/styles/style3.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
   <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16457513085"
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16457513085');
          `,
        }}
      />
      <Component {...pageProps} />
    
    </>
  );
}
