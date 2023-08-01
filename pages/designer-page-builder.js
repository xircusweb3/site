import { PublicLayout } from "../layouts/PublicLayout"
import { HeroCustom } from "../components/HeroCustom"
import { Box, Container, Grid, Heading, Image, Spacer, Stack, VStack, Icon, Text, AspectRatio, Button, Center } from "@chakra-ui/react"
import { GradientHeading } from "../components/Gradient"
import { GradientButton } from "../components/GradientButton"
import { TbCheck } from "react-icons/tb"
import YouTube from "react-youtube"
import { Products } from "../components/Products"
import { Blockchains } from "../components/Blockchains"
import { Social } from "../components/Social"
import Head from "next/head"

const CheckBox = ({ title, desc }) => (
  <VStack textAlign="center" borderWidth={1} p={6} justify="center" rounded="md" borderColor="#121924" bg="#0A0F15">
    <Icon as={TbCheck} bg="green.500" fontSize={40} p={2} rounded="full" />
    <Heading size="md">{title}</Heading>
    <Text>{desc}</Text>
  </VStack>
)

const GridItem = ({ title, desc, image }) => (
  <Box p={8} _dark={{ bg: 'gray.900' }} rounded="lg">
    <Image mb={4} src={image} w="full" />
    <Heading mb={2} size="md">{title}</Heading>
    <Text>{desc}</Text>
  </Box>
)

const ModuleItem = ({ title, desc, image }) => (
  <Box p={8} bg="rgba(40, 49, 100, 0.1)" textAlign="center" borderWidth={1} _dark={{ borderColor: 'rgba(212,217,255,0.2)' }} rounded="lg">
    <Image mb={4} src={image} w="full" />
    <Heading mb={2} size="md">{title}</Heading>
    <Text color="gray.500">{desc}</Text>
  </Box>  
)

export default function Designer() {
  return (
    <PublicLayout>
      <Head>
        <title>Xircus | Designer Page Builder</title>
      </Head>
      <Container maxW="container.xl" py={24}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={16} align="center">
          <Stack maxW={500} spacing={8}>
            <Heading size="md">NO-CODE BLOCK EDITOR</Heading>
            <Heading size="4xl">
              <GradientHeading size="4xl" as="span" display="">Craft dApps, No Code. </GradientHeading>
              Just Creativity.
            </Heading>
            <Heading size="sm" color="gray.500">Create the web&apos;s future using the palette of your imagination and join us in shaping tomorrow&apos;s digital landscape</Heading>
            <GradientButton alignSelf="flex-start" size="lg" fontSize={24} py={8} px={16}>Join Today</GradientButton>            
          </Stack>
          <Spacer />
          <Box maxW={460}>
            <Image src="/pages/designer-hero-1.png" />
          </Box>
        </Stack>
      </Container>


      <Box bg="#070C13" py={12}>
        <Container maxW="container.xl">
          <Stack direction={{ base: 'column', md: 'row' }} spacing={16} align="center">
            <Stack spacing={8}>
              <Box>
                <GradientHeading size="2xl">WordPress / Wix</GradientHeading>
                <Heading size="2xl">
                  <GradientHeading size="2xl" as="span" display=""> SquareSpace </GradientHeading>
                  ON STEROIDS
                </Heading>
              </Box>
              <Heading size="sm" color="gray.500">Dazzle with our intuitive builder and seamlessly integrate blockchain functionalities tailored for all creators - your Web3 canvas, empowered by Chakra UI, with no coding!</Heading>
              <GradientButton alignSelf="flex-start" size="lg">Design Faster</GradientButton>            
            </Stack>
            <Spacer />
            <Box maxW={460}>
              <Image src="/magic-hat.gif" />
            </Box>
          </Stack>
          <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={{ base: 2, md: 8 }}>
            <CheckBox title="Fastest time to market" desc="Your dApp ready in minutes, not weeks" />
            <CheckBox title="For Every Industry" desc="Tailor your dApp for any niche or market with our flexible tools." />          
            <CheckBox title="Dynamic Modules" desc="Seamlessly integrate any payment solution, social features, and unique functionalities." />
            <CheckBox title="XircusSkins" desc="Amplify your dApp's look & feel + functionality" />
          </Grid>
        </Container>
      </Box>
      
      <Box py={24}>
        <Container maxW="container.xl">
          <VStack textAlign="center" spacing={6}>
            <GradientHeading>Early bird gets the worm!</GradientHeading>
            <Heading size="sm" maxW={600} color="gray.500">Step into the world of Web3 with confidence. As 2030 approaches, it promises unparalleled opportunities and growth. Ensure your digital presence thrives in the decade to come.</Heading>
            <Image src="/pages/infographics.png" maxW={{ base: 'full', md: '800' }} />
          </VStack>
        </Container>
      </Box>

      <Box py={24}>
        <Container maxW="container.lg">
          <VStack textAlign="center" mb={12}>
            <GradientHeading size="2xl">Your Own</GradientHeading>   
          </VStack>
          <Grid templateColumns={{ base: 'auto', md: 'repeat(2, 1fr)' }} gap={6}>
            <GridItem 
              image="/pages/skins-animated.gif"
              title="NFT Marketplace" 
              desc="Dive into the NFT revolution! Own a marketplace in any niche – be it art, real estate, podcasts, or beyond. Seize the digital future, tailored just for you" />
            <GridItem 
              image="/pages/decentralize-exchange.png"
              title="Decentralized Exchange" 
              desc="Be the Master of Your Digital Exchange. Own a dEx akin to Uniswap, Pancakeswap, and stand at the forefront of decentralized finance" />            
            <GridItem 
              image="/pages/launchpad.png"
              title="Crowdfunding Launchpad" 
              desc="Start Your Launchpad: Sell tokens, NFTs, shares, or crowdfund for causes. The sky's not the limit; it's just the beginning" />
            <GridItem 
              image="/pages/launchpad.png"
              title="Prediction Market" 
              desc="Your prediction market: Settle online disputes, turn debates into challenges, gain recognition, and dive into sports games & social betting. Be the master of your forecasts!" />
          </Grid>          
        </Container>
      </Box>

      <Box py={24}>
        <Container maxW="container.lg">
          <Heading maxW={460} mb={6}>
            Modules & Blocks <GradientHeading as="span" display="">for Every dApp Desire</GradientHeading> 
          </Heading>
          <Grid templateColumns={{ base: 'auto', md: 'repeat(3, 1fr)' }} gap={6}>
            <ModuleItem 
              image="/pages/mod-buy-nfts.png"
              title="List / Mint / Buy / Sell NFTs" 
              desc="Empower your dApp with our marketplace building block: Instantly mint, list, buy, sell, and collect NFTs with seamless efficiency." />
            <ModuleItem 
              image="/pages/mod-fiat-onramp.png"
              title="Fiat-Onramping" 
              desc="Combine our Fiat Onramper with the dApp builder, empowering your dApp to let users buy crypto seamlessly with their choice of fiat and payment method." />              
            <ModuleItem 
              image="/pages/mod-social.png"
              title="Social components" 
              desc="Add dynamic social components to your dApp, fostering community and connectivity." />
            <ModuleItem 
              image="/pages/mod-music.png"
              title="Music / Video functionality" 
              desc="Integrate seamless audio and video functionality. Perfect for podcasts, video channels, audiobooks, or your very own TikTok-style platform." />
            <ModuleItem 
              image="/pages/mod-ticket.png"
              title="Ticketing" 
              desc="Integrate seamless ticketing solutions directly into your dApp, and simplify event management for your community." />
            <ModuleItem 
              image="/pages/mod-blocks.png"
              title="Future Blocks" 
              desc=" Integrate custom blocks and modules crafted by the developers community. Tailor functionality to your vision, ensuring limitless growth and innovation." />              
          </Grid>
        </Container>
      </Box>

      <Container maxW="container.lg" mb={24}>
        <AspectRatio ratio={16/9} rounded="lg" overflow="hidden">
          <YouTube videoId="cM7w4S9YdRo" opts={{ width: '100%', height: '100%' }} />
        </AspectRatio>
        <Center my={8}>
          <GradientButton size="lg">Try Now</GradientButton>
        </Center>
      </Container>      

      <Products />

      <Social />

      <Blockchains />


    </PublicLayout>
  )
}


  // <HeroCustom
  // overline="DESIGNER"
  // title="Create, Customize and Monetize Skins"
  // desc="in minutes by designing user interfaces for any industry"
  // />
