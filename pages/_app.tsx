import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import '@fontsource/roboto'

// const theme = extendTheme({
//   fonts: {
//     heading: `'Roboto', sans-serif`,
//     body: `'Roboto', sans-serif`,
//   },
//   sizes: { ss: { px: '256px' } }
// })
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider >
      <QueryClientProvider client={new QueryClient()}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
