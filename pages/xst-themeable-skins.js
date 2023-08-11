import { PublicLayout } from "../layouts/PublicLayout"
import { HeroMain } from "../components/HeroMain"
import Head from "next/head"
import { FeatItem, FeatLeft } from "../components/FeatLeft"
import { GridCarousel, GridItemCenter } from "../components/GridCarousel"
import { Container, Grid, VStack } from "@chakra-ui/react"
import { GradientHeading } from "../components/Gradient"
import { PlatformEconomy } from "../components/PlatformEconomy"
import { Products } from "../components/Products"
import { Social } from "../components/Social"
import { Blockchains } from "../components/Blockchains"
import { Whitelisting } from "../components/Whitelisting"

// Complimentary Products
// Alternative Payment Currency for deployed Apps
// Pension
// Features
// Staking Rewards
// Tier Levels
// Tokenomics
// 

export default function Skins() {
  return (
    <PublicLayout>

      <Head>
        <title>Xircus | XircusSkins Themeable User Interfaces XST</title>
      </Head>

      <HeroMain
        overline="Innovate. Integrate. Excel"
        title="Elevate Every Pixel, Empower Every Function"
        desc="Discover industry-tailored XircusSkins, elevating your dapp's aesthetic with zero coding. Extend its power with XircusModules, integrating plugins and addons seamlessly. Craft more than a dapp – create an unmatched digital journey."
        href="https://beta.xircus.app/skins"
        link="Check Them Out"
        />

      <FeatLeft 
        title="Tailored, Adaptable, Thriving"
        image="/pages/skins-animated.gif"
        >
        <FeatItem title="Effortless Customization" desc="Switch up your dApp's look instantly, no redesign needed." />
        <FeatItem title="Tailored Designs" desc="Industry-specific skins like 'Music' and 'Video' optimize user experience." />        
        <FeatItem title="Future Ready" desc="Focus on improving, not rebuilding. Our modules make scaling seamless." />
        <FeatItem title="Adaptable Skins" desc="Upgrade freely or go premium. Evolve as your dApp grows." />
        <FeatItem title="Community Powered" desc="Design, share, and thrive. Offer your unique skins to our ecosystem." />
      </FeatLeft>


      <Container maxW="container.xl" py={24}>
        <VStack mb={6}>
          <GradientHeading textAlign="center">XircusSkins - for Designers!</GradientHeading>
        </VStack>
        <Grid templateColumns={{ base: 'auto', md: 'repeat(4, 1fr)' }} gap={4}>
          <GridItemCenter image="/pages/customize-icon.png" title="Design" desc="Join us today to unlock the full potential" />
          <GridItemCenter image="/pages/rocket-icon.png" title="Deploy" desc="Join us today to unlock the full potential" />          
          <GridItemCenter image="/pages/cart-icon.png" title="Sell" desc="Join us today to unlock the full potential" />                    
          <GridItemCenter image="/pages/earn-icon.png" title="Earn" desc="Join us today to unlock the full potential" />                              
        </Grid>
      </Container>      

      <PlatformEconomy />

      <Products />

      <Social />

      <Blockchains />

      <Whitelisting />

    </PublicLayout>
  )
}
