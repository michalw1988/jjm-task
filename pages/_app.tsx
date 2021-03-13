import '../styles/globals.scss'
import Navbar from '../components/Navbar'
import { StateProvider } from '../state/state'
import { initialState } from '../state/initialState'
import { reducer } from '../state/reducer'
import type { AppProps } from 'next/app'


function JJMTaskApp({ Component, pageProps }: AppProps) {
  return <div>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Navbar />
      <Component {...pageProps} />
    </StateProvider>
  </div>
}

export default JJMTaskApp
