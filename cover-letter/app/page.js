import Image from 'next/image'
import Head from 'next/head'
import NavBar from './components/NavBar'
import Footer from './components/Footer';

export default function Home({ children, title = 'Dans Personal Cover Letter'}) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
       <NavBar />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

