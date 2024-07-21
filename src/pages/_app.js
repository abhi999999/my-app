import React, { useEffect } from "react";

import "./../app/globals.css";
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {}, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
