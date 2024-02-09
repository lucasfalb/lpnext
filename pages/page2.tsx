import React, { FunctionComponent } from 'react';
import ComponentMapper from '@/utils/ComponentMapper';

import { GetServerSideProps } from 'next';

type HomePageProps = {
  siteConfig: any;
}

const HomePage: React.FC<HomePageProps> = ({ siteConfig }) => {
  console.log(siteConfig)
  return (
    <>
      {siteConfig.page_config_v1.map((item: any, index: number) => {
        const Component = ComponentMapper[item.acf_fc_layout];
        return Component ? <Component key={index} {...item} /> : null;
      })}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://api.lucasfalb.com/wp-json/site-config/v1');
  const siteConfig = await res.json();

  return {
    props: {
      siteConfig,
    },
  };
};

export default HomePage;
