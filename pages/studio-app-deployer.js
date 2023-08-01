import { PublicLayout } from "../layouts/PublicLayout"
import { HeroCustom } from "../components/HeroCustom"
import Head from "next/head"
import { Box, Button, Container, Heading, HStack, Image, List, Stack, Text, Icon, Spacer, ListItem, AspectRatio, Grid, Highlight, VStack } from "@chakra-ui/react"
import { GradientHeading } from "../components/Gradient"
import { GradientButton } from "../components/GradientButton"
import { TbGlobe, TbWorld } from "react-icons/tb"
import YouTube from "react-youtube"
import { Products } from "../components/Products"
import { Earn } from "../components/Earn"
import { Social } from "../components/Social"
import { Blockchains } from "../components/Blockchains"

const FeatItem = ({ title = '', desc = '' }) => (
  <HStack spacing={4} align="flex-start" _dark={{ bg: 'gray.900' }} p={6} rounded="md">
    <Icon as={TbWorld} fontSize={50} bg="gray.500" rounded="full" p={3} />
    <Box>
      <Heading size="md" mb={4}><Highlight query={["NO MORE"]} styles={{ color: '#FFD600' }}>{title}</Highlight></Heading>
      <Text>{desc}</Text>
    </Box>
  </HStack>  
)

const FeatListItem = ({ title = '', desc = '' }) => (
  <ListItem p={4} borderWidth={1} rounded="md" _dark={{ borderColor: 'gray.900' }}>
    <Heading size="lg">{title}</Heading>
    <Text color="gray.500" fontSize="sm">{desc}</Text>
  </ListItem>
)
 
const GridItem = ({ title, desc, image }) => (
  <Box p={8} _dark={{ bg: 'gray.900' }} rounded="lg">
    <Image mb={4} src={image} w="full" />
    <Heading mb={2} size="md">{title}</Heading>
    <Text>{desc}</Text>
  </Box>
)

export default function Studio() {
  return (
    <PublicLayout>
      <Head>
        <title>Xircus | Studio App Deployer</title>
      </Head>
      <Container maxW="container.xl">
        <Stack textAlign="center" py={24} spacing={2}>
          <Heading fontSize="md" textTransform="uppercase" letterSpacing={4}>Xircus Web3 Protocol</Heading>
          <GradientHeading size="4xl">Unleashing the Future</GradientHeading>
          <GradientHeading size="4xl">of Web3 Creation</GradientHeading>
          <Text fontSize="xl" py={6} color="gray.500">Xircus is an all-in-one low & no-code solution transforming the way Web3 dApps are created.</Text>
          <GradientButton alignSelf="center" size="lg" fontSize={24} py={8} px={16}>Join Today</GradientButton>
        </Stack>
        <Image src="/pages/studio-hero-1.png" />
      </Container>
      <Container maxW="container.lg" mb={24}>
        <Stack direction={{ base: 'column', md: 'row' }} mb={6} align="center">
          <Box>
            <Heading size="xl">Challenges in </Heading>
            <GradientHeading size="xl">Transitioning to Web3</GradientHeading>
          </Box>
          <Spacer />
          <Text color="gray.500">The evolving Web3 landscape comes with its unique challenges</Text>
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={16} align="center">
          <Box w="full">
            <Image src="/pages/studio-feat-1.png" />
          </Box>
          <List w="full" spacing={4}>
            <FeatItem 
              title="NO MORE Web3 App Complexity" 
              desc="Delving into niche-specific features, navigating smart contract intricacies, planning sophisticated application structures, and grappling with centralized control issues."
              />
            <FeatItem 
              title="NO MORE Steep Development Costs" 
              desc="As Web3 gains momentum, securing proficient developers becomes challenging and costly. Add to that the hefty expenses for smart contract creation and full-stack development, along with restrictive and pricey centralized white-label solutions."
              />              
            <FeatItem 
              title="NO MORE Extended Time to Market" 
              desc="Lengthy durations for development, testing, user onboarding, product validation, and adapting to ever-changing market conditions."
              />                            
          </List>       
        </Stack>
      </Container>

      <Container maxW="container.lg" mb={24}>
        <Heading size="xl" textAlign="center">The &quot;Studio&quot; <GradientHeading as="span" size="xl">Web3 Toolkit Hub</GradientHeading></Heading>
        <Text textAlign="center" mb={12}>Your one-stop destination for seamless blockchain development tools and resources.</Text>
        <Grid templateColumns={{ base: 'auto', md: 'repeat(2, 1fr)' }} gap={6}>
          <GridItem 
            image="/pages/no-code.png"
            title="Effortless Web3 Design" 
            desc="A no-code drag and drop page builder, making Web3 application creation as easy as drawing on a canvas." />
          <GridItem 
            image="/pages/low-code.png"
            title="Flexibility Meets Simplicity" 
            desc="Low-code SDKs that offer flexibility without compromising on depth." />            
          <GridItem 
            image="/pages/contracts-animated.gif"
            title="Simplified Smart Contracts" 
            desc="Generate smart contracts with the help of AI" />
          <GridItem 
            image="/pages/contracts-ai-animated.gif"
            title="Seamless Contract Management" 
            desc="Easily import your contracts or use existing ones." />
        </Grid>
      </Container>

      <Container maxW="container.xl" mb={24}>
        <Stack direction={{ base: 'column', md: 'row' }} justify="space-between" mb={6} align="center">
          <Box w="full">
            <Heading size="xl">Empower, Innovate, Thrive:</Heading>
            <GradientHeading size="xl">The Xircus Advantage</GradientHeading>
          </Box>
          <Text maxW={500} color="gray.500">Discover the Xircus edge. Dive into our unique offerings that set us apart in the Web3 realm, crafted to ensure you not only succeed but lead in the digital transformation journey.</Text>
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={16}>
          <List spacing={2}>
            <FeatListItem title="Cost Efficiency" desc="Start at no cost and capitalize on our commission structure." />
            <FeatListItem title="Seamless Revenue Opportunities" desc="Partner with us and share revenue with our supportive backers." />            
            <FeatListItem title="Rapid Deployment" desc="Launch instantly with no-code or customize swiftly with our low-code solution." />            
            <FeatListItem title="Inclusive Ownership & Control" desc="Ensure your platform's on-chain ownership for maximum control and transparency." />                        
            <FeatListItem title="True Decentralization & Flexibility" desc="Deploy across varied cloud providers and embrace an open building environment." />                        
          </List>
          <Box>
            <Image src="/pages/skins-animated.gif" rounded="lg" />
          </Box>
        </Stack>
      </Container>      

      <Container maxW="container.xl" mb={24}>
        <AspectRatio ratio={16/9} rounded="lg" overflow="hidden">
          <YouTube videoId="eiB3nggwpE8" opts={{ width: '100%', height: '100%' }} />
        </AspectRatio>
      </Container>

      <Container maxW="container.xl">
        <VStack spacing={0}>
          <Heading>Unlock Instant <GradientHeading as="span">Earnings</GradientHeading></Heading>
          <GradientHeading>with Xircus Ecosystem</GradientHeading>
        </VStack>
      </Container>

      <Earn />      

      <Products />

      <Social />

      <Blockchains />

    </PublicLayout>
  )
}


  // <HeroCustom 
  // overline="STUDIO"
  // title="Deploy and Launch your Web3 apps"
  // desc="in minutes with almost zero cost on multiple chains"
  // />
