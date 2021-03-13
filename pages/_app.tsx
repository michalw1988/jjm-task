import '../styles/globals.scss'
import Navbar from '../components/Navbar'
import { StateProvider } from '../state/state'

interface IProps {
  Component: any
  pageProps: object
}

const initialState = {
  formSubmitted: false,
}

const reducer = (state: object, action: any) => {
  switch (action.type) {
    case 'setFormSubmitted':
      return {
        ...state,
        formSubmitted: action.value
      }
    default:
      return state;
  }
}

function MyApp({ Component, pageProps }: IProps) {
  return <div>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Navbar />
      <Component {...pageProps} />
    </StateProvider>
  </div>
}

export default MyApp
