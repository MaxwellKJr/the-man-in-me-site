import Layout from "../components/Layout";
import "../css/index.css";
import "materialize-css/dist/css/materialize.min.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
