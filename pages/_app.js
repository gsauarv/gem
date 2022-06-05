import "../styles/globals.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
const colors = {
  brand: {
    primary: "#051367",
    secondary: "#FF6B6B",
  },
};

const theme = extendTheme({ colors });
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
