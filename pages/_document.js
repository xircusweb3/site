import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const { locale } = this.props.__NEXT_DATA__
    const dir = locale === "ar" ? "rtl" : "ltr"
    return (
      <Html dir={dir} lang={locale}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="shortcut icon" type="image/png" href="favicon-96x96.png" />
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@100;300;500;700;900&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;500;700;900&display=swap" rel="stylesheet"/>          
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;300;500;700;900&display=swap" rel="stylesheet"/>                    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument