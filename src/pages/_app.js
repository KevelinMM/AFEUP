import "../styles/globals.css";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>AFEUP</title>
        <meta name="description" content="AFEUP" />
      </Head>
      <Header />
      <Component {...pageProps} className="min-h-screen" />
      <Footer />
    </div>
  );
}

export default MyApp;
