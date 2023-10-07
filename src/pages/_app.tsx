import { ChakraProvider } from '@chakra-ui/react'
import { AppProps} from 'next/app'
import { useRouter } from 'next/router'
import React from 'react'
import theme from 'theme/theme'
import 'styles/Fonts.css'
import 'styles/App.css'
import 'styles/Contact.css'
import 'react-toastify/dist/ReactToastify.css';
import 'react-calendar/dist/Calendar.css'
import 'styles/MiniCalendar.css'
import Head from 'next/head'
import axios from 'axios'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AuthProvider from '../contexts/AuthContext'
import NextNProgress from 'nextjs-progressbar';

const queryClient = new QueryClient();

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
	const pageKey = router.asPath
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Head>
          <title>ComeCari Admin Channel</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#000000' />
        </Head>
        <React.StrictMode>
          <AuthProvider>
            <NextNProgress height={4} />
            <Component {...pageProps}  />
          </AuthProvider>
        </React.StrictMode>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp
