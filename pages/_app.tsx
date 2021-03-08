import { Provider as StyletronProvider } from 'styletron-react';
import { Client, Server } from 'styletron-engine-atomic';
import { AppProps } from 'next/app'

const getHydrateClass = () =>
  document.getElementsByClassName('_styletron_hydrate_');

export const styletron =
  typeof window === 'undefined'
    ? new Server()
    : new Client({
      hydrate: getHydrateClass(),
    });



export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyletronProvider value={styletron} debugAfterHydration>
      <Component {...pageProps} />
    </StyletronProvider>
  )
}
