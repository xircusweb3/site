import { PublicLayout } from "../layouts/PublicLayout"
import { HeroCustom } from "../components/HeroCustom"
import { HeroMain } from "../components/HeroMain"
import { FeatItem, FeatLeft } from "../components/FeatLeft"
import Head from "next/head"
import { ContentCenter } from "../components/ContentCenter"
import { Products } from "../components/Products"
import { Social } from "../components/Social"
import { Blockchains } from "../components/Blockchains"
import { Whitelisting } from "../components/Whitelisting"

// Listing currencies for free

export default function Currencies() {
  return (
    <PublicLayout>

      <Head>
        <title>Xircus | Open Currencies for Web3 Apps</title>        
      </Head>

      <HeroMain 
        overline="Embrace Diverse Currencies"
        title="Discover a World of Open Token Currencies"
        desc="Unlock a World of Possibilities with Our Multifaceted Currency Options. Seamlessly Transact and Expand Your Global Reach, Empowering Your Business's Success."
        image="/pages/currency-hero-1.png"
        />

      <FeatLeft title="Empower, Expand, Evolve: Where Every Token Thrives." image="/pages/contracts-hero-1.png">
        <FeatItem title="Instant Token Utility" desc="Transform your tokens from mere assets to functional tools, instantly." />
        <FeatItem title="Total Token Agnosticism" desc="We don't play favorites. Every token, irrespective of its origin, gets the spotlight." />        
        <FeatItem title="Integrated Ecosystem Benefits" desc="Leverage the collective strength of the Xircus ecosystem, where each component amplifies your token's potential." />
        <FeatItem title="Community-Centric Growth" desc="Tailor experiences for your community, driving value and engagement." />
      </FeatLeft>

      <ContentCenter 
        maxW="container.lg"
        image="/pages/punks-hero-3.png"
        title="Features"
        desc="Unlock the full potential of your dApp with Xircus. Dive into a world where every token finds utility, manage multiple currencies effortlessly, and ensure smooth transactions with real-time liquidity checks. Elevate your operations with our advanced currency solutions."      
        />

      <Products />

      <Social />

      <Blockchains />

      <Whitelisting />
      
    </PublicLayout>
  )
}
