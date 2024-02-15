import "../src/app/globals.css";
import 'tailwindcss/tailwind.css';
import { GetServerSideProps } from 'next';
import Head from "next/head";
import ComponentMapper from '@/utils/ComponentMapper';

type HomePageProps = {
  siteConfig: any;
}

export default function Home({ siteConfig }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Carplus - Growth</title>
        <meta name="description" content="The best LP" />
        <link rel="preload" as="image" href="http://localhost:3001/_next/image?url=https%3A%2F%2Fapi.lucasfalb.com%2Fwp-content%2Fuploads%2F2024%2F02%2Feb616e37f7b18fda5e99c47228402d53.png&w=1920&q=75" />
        <link rel="preload" href="/fonts/Mont-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      </Head>
      {siteConfig.page_config_v1 && siteConfig.page_config_v1.map((item: any, index: number) => {
        const Component = ComponentMapper[item.acf_fc_layout];
        return Component ? <Component key={index} {...item} /> : null;
      })}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://api.lucasfalb.com/wp-json/site-config/v1');
  const siteConfig = await res.json();

  return {
    props: {
      siteConfig,
    },
  };
};
