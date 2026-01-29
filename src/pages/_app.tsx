import '@/styles/globals.css'
import "@/styles/variables.css"
import type { AppProps } from 'next/app'
import { ReadingProvider } from '@/hooks/useIsReading';
import Layout from '@/Components/Layout';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReadingProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReadingProvider>
  );
}
