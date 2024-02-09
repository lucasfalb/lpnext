import 'tailwindcss/tailwind.css';
import { GetServerSideProps } from 'next';
import ComponentMapper from '@/utils/ComponentMapper';

type HomePageProps = {
  siteConfig: any;
}
export default function Home({ siteConfig }: HomePageProps) {
  return (
    <>
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
