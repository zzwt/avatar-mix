import { useState } from 'react';
import Head from 'next/head';

import styles from '../styles/index.module.css';
import { getRandomStyle } from '../utils';

import { avatarConfig } from '../config';

import Preview from './../components/preview/index';
import Selection from './../components/selection/index';
import Footer from './../components/footer/index';
import Header from './../components/header/index';

export default function Home({ initialStyle }) {
  const [config, setConfig] = useState(initialStyle);

  return (
    <>
      <Head>
        <title>Avatar Mix</title>
        <meta name="description" content="Cute Avatar Mix" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.container}>
        <Preview config={config} />
        <Selection config={config} setConfig={setConfig} />
        <Footer />
      </div>
    </>
  );
}

export function getServerSideProps() {
  return {
    props: { initialStyle: getRandomStyle(avatarConfig.background.enabled) },
  };
}
