import "../src/app/globals.css";
import 'tailwindcss/tailwind.css';
import { GetServerSideProps } from 'next';
import Head from "next/head";
import ComponentMapper from '@/utils/ComponentMapper';

type HomePageProps = {
  siteConfig: any;
}

export default function Home2({ siteConfig }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Carplus - Growth</title>
        <meta name="description" content="The best LP" />
        <link rel="preload" href="/fonts/Mont-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      </Head>
      {siteConfig.page_config_v2 && siteConfig.page_config_v2.map((item: any, index: number) => {
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
