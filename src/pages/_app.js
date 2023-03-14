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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.6/dist/jquery.fancybox.min.js" defer></script>
        <link
          href="https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.6/dist/jquery.fancybox.min.css"
          rel="stylesheet"
        />
        <link href="https://codepen.io/fancyapps/pen/Kxdwjj" rel="stylesheet" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logoAfeup.png"></link>
      </Head>
      <Header />
      <Component {...pageProps} className="min-h-screen" />
      <Footer />
    </div>
  );
}

export default MyApp;
