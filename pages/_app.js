import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp


// import "../styles/globals.css";
// import type { AppProps } from "next/app";
// import { wrapper } from "../store/store";

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

// export default wrapper.withRedux(MyApp);