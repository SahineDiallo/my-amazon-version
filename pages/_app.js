import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "../app/store";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/css/bootstrap.min.css");
  });
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
