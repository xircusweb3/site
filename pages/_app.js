import { ChakraProvider, extendTheme, localStorageManager } from '@chakra-ui/react'
import { NextIntlProvider } from 'next-intl';
import Head from 'next/head'
import { XIRCUS_TITLE, XIRCUS_DESC, XIRCUS_URL, XIRCUS_IMAGE } from '../constants'

const theme = extendTheme({
  fonts: {
    heading: 'Space Grotesk',
    body: 'Space Grotesk'
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth'
      },
      body: {
        bgRepeat: 'repeat-y',
        bgSize: 'cover',
      }
    }
  },
  components: {
    Heading: {
      variants: {
        headline: {
          bgClip: 'text',
          letterSpacing: 3,
          bgGradient: 'linear(to-r, #96c93d, #00b09b)'
        }
      }
    },
    Button: {
      variants: {
        primary: {
          p: 6,
          _focus: { outline: 0 },
          fontSize: 'lg',
          borderRadius: 'full',
          bgGradient: 'linear(to-l, #8a2387, #e94057, #f27121)',
        },
        secondary: {
          p: 6,
          _focus: { outline: 0 },
          fontSize: 'lg',
          borderRadius: 'full',
          bgGradient: 'linear(to-l, #43e, #8a2387)',
        }
      }
    }
  }
})


function MyApp({ Component, pageProps, router }) {
  const messages = require(`../i18n/${router.locale}.json`)
  return (
    <NextIntlProvider messages={messages}>
      <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
        <Head>
          <title>{XIRCUS_TITLE}</title>
          <meta name="title" content={XIRCUS_TITLE} />
          <meta name="description" content={XIRCUS_DESC} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={XIRCUS_URL} />
          <meta property="og:title" content={XIRCUS_TITLE} />
          <meta property="og:description" content={XIRCUS_DESC} />
          <meta property="og:image" content={XIRCUS_IMAGE} />
          <meta property="fb:app_id" content="291054942394490" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={XIRCUS_URL} />
          <meta property="twitter:title" content={XIRCUS_TITLE} />
          <meta property="twitter:description" content={XIRCUS_DESC} />
          <meta property="twitter:image" content={XIRCUS_IMAGE} />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="shortcut icon" type="image/png" href="favicon-96x96.png" />
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@200;300;500;700&display=swap" rel="stylesheet"/>
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </NextIntlProvider>
  )
}

export default MyApp
