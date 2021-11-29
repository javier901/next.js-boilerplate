import 'tailwindcss/tailwind.css'

import { ApolloProvider } from '@apollo/client'
import client from '../graphql/client'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
