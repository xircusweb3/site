import { PublicLayout } from "../layouts/PublicLayout"
import { HeroCustom } from "../components/HeroCustom"
import { HeroCenter } from "../components/HeroCenter"
import Head from "next/head"
import { ContentLeft } from "../components/ContentLeft"
import { ContentCenter } from "../components/ContentCenter"
import { Box, Container, Stack } from "@chakra-ui/react"
import { GridCarousel, GridItemCenter } from "../components/GridCarousel"
import { GradientHeading } from "../components/Gradient"
import { PlatformEconomy } from "../components/PlatformEconomy"
import { Products } from "../components/Products"
import { Blockchains } from "../components/Blockchains"
import { Whitelisting } from "../components/Whitelisting"
import { Social } from "../components/Social"

// Complimentary Products
// Alternative Payment Currency for deployed Apps
// Pension
// Features
// Staking Rewards
// Tier Levels
// Tokenomics

export default function Punks() {
  return (
    <PublicLayout>

      <Head>
        <title>Xircus | XircusPunks Avatar DAO XPS</title>
      </Head>

      <HeroCenter 
        overline="ARTISTIC REVOLUTION BEGINS HERE"
        title="Welcome to the"
        subtitle="Enchanting World of"
        subtitle2="DAO XircusPunks"
        desc="Explore the vibrant world of XircusPunks, where blockchain meets artistry and community thrives. Join us today!"
        href="https://beta.xircus.app/punks"
        link="Explore Avatars"
        image="/pages/punks-hero-1.png"        
        imageProps={{ mt: { base: 4, md: -20 }}}
        />      

      <ContentLeft 
        image="/pages/punks-hero-2.png" 
        title="Join. Vote. Thrive."
        desc="As a Xircus DAO member, you get more than just a vote. Enjoy exclusive privileges, enticing perks, and rewarding opportunities that go beyond the ballot. Shape the Web3 narrative, earn as you engage, and amplify your voice in the digital frontier!"
        />

      <Container maxW="container.xl">
        <GradientHeading>From Wallet to Exclusive Access</GradientHeading>
        <GridCarousel>
          <GridItemCenter image="/pages/wallet-icon.png" title="Connect Wallet" desc="Link your digital wallet for a safe transaction. Options include Wallet Connect, MetaMask, Coinbase, and TrustWallet." />
          <GridItemCenter image="/pages/upload-icon.png" title="Pick Yours" desc="Select from diverse options: moviestars, brands, game figures, or artists. Make it personal." />          
          <GridItemCenter image="/pages/pay-icon.png" title="Pay with XW3" desc="Use XW3, the Xircus Web3 Protocol's native token, to finalize your purchase." />                    
          <GridItemCenter image="/pages/wallet-icon.png" title="Access Premiums" desc="Use XW3, the Xircus Web3 Protocol's native token, to finalize your purchase." />                              
        </GridCarousel>
      </Container>

      <ContentCenter 
        maxW="container.lg"
        image="/pages/punks-hero-3.png"
        title="Features"
        desc="Dive into a world where membership means power and privilege. From front-row opportunities to having a decisive say and receiving timely insights - here's what awaits:"
        />

      <PlatformEconomy />

      <Products />

      <Social />

      <Blockchains />

      <Whitelisting />

    </PublicLayout>
  )
}
