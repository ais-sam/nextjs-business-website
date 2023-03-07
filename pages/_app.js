import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
