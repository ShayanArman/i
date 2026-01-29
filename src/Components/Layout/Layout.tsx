import { Flex } from '@mantine/core';
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode}) {

  return (
    <>
      <div>
        <Head>
          <title>Shayan Arman Extraordinaire</title>
          <link rel="icon" href="/logo.ico" />
          <meta name="description" content="Shayan Arman Extraordinaire" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="og:title" content="Shayan Arman Extraordinaire" />
        </Head>
        
        <Flex direction="column" align="center" mt={15} style={{paddingLeft: "1rem", paddingRight: "1rem"}}>
          {children}
        </Flex>

      </div>
    </>
  );
}
