import '../styles/globals.css'
import { wrapper } from '../store/store'
import { AppProps } from 'next/dist/next-server/lib/router/router'

const WrappedApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)
