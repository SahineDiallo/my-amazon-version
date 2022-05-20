import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/css/bootstrap.min.css");
  });
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
