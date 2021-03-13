import '../styles/globals.scss'
import Navbar from '../components/Navbar'

interface IProps {
  Component: any
  pageProps: object
}

function MyApp({ Component, pageProps }: IProps) {
  return <div>
    <Navbar />
    <Component {...pageProps} />
  </div>
}

export default MyApp
