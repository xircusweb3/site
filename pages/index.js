import { Blockchains } from "../components/Blockchains"
import { Calculator } from "../components/Calculator"
import { Earn } from "../components/Earn"
import { Feats } from "../components/Feats"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Press } from "../components/Press"
import { Partners } from "../components/Partners"
import { Products } from "../components/Products"
import { Reach } from "../components/Reach"
import { Roadmap } from "../components/Roadmap"
import { Skins } from "../components/Skins"
import { Social } from "../components/Social"
import { Solutions } from "../components/Solutions"
import { Team } from "../components/Team"
import { Token } from "../components/Token"
import Script from 'next/script'
import { ContractAI } from "../components/ContractAI"

export default function Home() {
  return (
    <>
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
      <Header />
      <Hero />
      <Press />
      <Solutions />
      <ContractAI />
      <Skins />
      <Blockchains />
      <Feats />
      <Reach />
      <Social />
      <Partners />
      <Products />
      <Earn />
      <Token />
      <Calculator />
      <Roadmap />
      <Team />
      <Footer />
    </>
  )
}
