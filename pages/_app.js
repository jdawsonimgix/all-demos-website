import '../styles/globals.css'
import Flyoutmenu from '../components/Flyoutmenu'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Flyoutmenu />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
