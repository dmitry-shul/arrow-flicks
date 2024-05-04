import '@mantine/core/styles.css'; 
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ArrowFlicks - Dmitry Shulzhytski</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icons/favicon.svg" />
      </Head>
      <MantineProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  )
}
