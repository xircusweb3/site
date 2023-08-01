import { ChakraProvider, extendTheme, localStorageManager } from '@chakra-ui/react'
import { NextIntlProvider } from 'next-intl';
import Head from 'next/head'
import { XIRCUS_TITLE, XIRCUS_DESC, XIRCUS_URL, XIRCUS_IMAGE } from '../constants'
import Script from 'next/script'

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
        bg: '#080402',
        scrollBehavior: 'smooth'
      },
      body: {
        bg: '#080402',
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
        </Head>
        <Script
          id="gta"
          strategy="beforeInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-X95EEBY9YK`}
          />
        <Script
          id="gtag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X95EEBY9YK', {
              page_path: window.location.pathname,
            });
          `,
          }}
          />
        <Script
          id="hotjar"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:2524876,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
          }}
          />               
        <Component {...pageProps} />
      </ChakraProvider>
    </NextIntlProvider>
  )
}

export default MyApp
