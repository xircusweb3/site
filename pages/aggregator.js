import { PublicLayout } from "../layouts/PublicLayout"
import { HeroMain } from "../components/HeroMain"
import { FeatItem, FeatLeft } from "../components/FeatLeft"
import { Container, VStack, Image } from "@chakra-ui/react"
import { GradientHeading } from "../components/Gradient"
import { Products } from "../components/Products"
import { Social } from "../components/Social"
import { Blockchains } from "../components/Blockchains"
import { Whitelisting } from "../components/Whitelisting"

// Listing currencies for free

export default function Aggregator() {
  return (
    <PublicLayout>
      <HeroMain 
        overline="Xircus Aggregator"
        title="Unified Content Aggregators"
        desc="They simplify the process of gathering data, content, or services, saving users time and effort while enhancing the efficiency of information consumption."
        link="Join Today"
        image="/pages/aggregator-hero-1.png"
        />      

      <FeatLeft title="One Search, Every NFT Solution" image="/pages/aggregator-hero-2.png" py={24}>
        <FeatItem title="Unified NFT Search" desc="Seamlessly comb through multi-chain marketplaces with aggregated NFT data. Enhance NFT visibility and discoverability, all in one place." />
        <FeatItem title="Broadened Tokenized Exposure" desc="Showcase not just NFT art, but all tokenized industries, gaining unmatched reach in the Xircus ecosystem and leading platforms like OpenSea and Rarible." />        
        <FeatItem title="Aggregator Innovations" desc="Unlock unique NFT experiences with Aggregator Contracts, such as mystery boxes and randomizers, elevating collector engagement." />
        <FeatItem title="Industry-specific XircusSkins" desc="A thriving designer community constantly innovates, offering industry-tailored XircusSkins to ensure your dApp stands out." />
      </FeatLeft>

      <Container maxW="container.xl" py={24}>
        <VStack mb={6}>
          <GradientHeading>How it works</GradientHeading>
        </VStack>
        <Image src="/pages/aggregator-economy.png" />
      </Container>

      <Products />

      <Social />

      <Blockchains />

      <Whitelisting />

    </PublicLayout>
  )
}
