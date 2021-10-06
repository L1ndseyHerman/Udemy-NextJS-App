//  This is a special NextJS file, seems to be like ReactJS's index.js.

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
