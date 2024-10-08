import '../styles/global.css';
import { Raleway } from 'next/font/google'
import Navbar from '../components/Navbar';

const raleway = Raleway({subsets: ['latin']});

export default function App({ Component, pageProps }) {
  return (
    <main className={raleway.className}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
