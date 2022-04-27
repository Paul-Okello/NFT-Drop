import "../styles/globals.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
};

export default MyApp;
