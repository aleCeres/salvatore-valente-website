import Head from 'next/head';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Salvatore Valente Photoreporter</title>
        <meta name='description' content='Salvatore Valente Photoreporter' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero heading='Salvatore Valente' message='Photoreporter'/>
    </div>
  );
}
