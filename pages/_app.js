import "../css/style.scss";
import "../css/form.scss";
import Head from "next/head";
import Link from "next/link";
import TopNav from "../components/TopNav/TopNav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Astronauts Crew</title>
      </Head>

      {/* Navigaion component */}
      <TopNav />

      {/* Rendering main content */}
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
