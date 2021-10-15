
import { GlobalStyle } from "../public/styling/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
  <>
    <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
