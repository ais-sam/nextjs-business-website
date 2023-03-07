import "../styles/globals.css";
import Head from "next/head";
import Header from "/components/shared/Header"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Roboto:wght@300;400;500;700;900&display=swap');
        </style>
      </Head>
      <Header/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
