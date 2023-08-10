import { PublicLayout } from "../layouts/PublicLayout"
import { AspectRatio, Box, Button, Container, Grid, Heading, HStack, IconButton, Image, List, ListItem, Spacer, Stack, Text, UnorderedList, VStack } from "@chakra-ui/react"
import { GradientHeading } from "../components/Gradient"
import { GradientButton } from "../components/GradientButton"
import YouTube from "react-youtube"
import { Products } from "../components/Products"
import { Social } from "../components/Social"
import { Blockchains } from "../components/Blockchains"
import { Whitelisting } from "../components/Whitelisting"
import { TbArrowUpRight } from "react-icons/tb"
import Head from "next/head"

// Complimentary Products
// Alternative Payment Currency for deployed Apps
// Pension
// Features
// Staking Rewards
// Tier Levels
// Tokenomics
// 

const CONTRACT_LINK = {
  as: 'a',
  target: '_blank',
  href: 'https://beta.xircus.app/contracts'
}

const GridItem = ({ image, title, desc }) => (
  <Box rounded="md" borderWidth={1} borderColor="rgba(212, 217, 255, 0.20)" p={4} bg="rgba(40, 49, 100, 0.10)">
    <Image src={image} boxSize="70px" mb={4} />
    <Heading size="md" mb={2}>{title}</Heading>
    <Text fontSize="sm" color="gray.500">{desc}</Text>
  </Box>
)

const FeatItem = ({ image, title, desc }) => (
  <HStack p={4} rounded="lg" gap={3} bg="#070C13">
    <Image src={image} boxSize="70px"/>
    <Box>
      <Heading size="md" mb={2}>{title}</Heading>
      <Text fontSize="sm" color="gray.500">{desc}</Text>
    </Box>
  </HStack>
)

export default function Contracts() {
  return (
    <PublicLayout>

      <Head>
        <title>Xircus | Contracts with AI</title>
      </Head>

      <Container maxW="container.xl" py={24}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={16} align="center">
          <Stack maxW={500} spacing={8}>
            <Heading size="md">SMART CONTRACT SOLUTIONS</Heading>
            <Heading size="3xl">
              Deploy, Adapt & Innovate
              <GradientHeading size="3xl" as="span" display=""> Smart Contracts</GradientHeading>
            </Heading>
            <Heading size="sm" color="gray.500">With Xircus, demystify the world of blockchain. Seamlessly deploy, manage, and create smart contracts, and let your strategy shine in the decentralized realm. Dive in and redefine the future with us.</Heading>
            <GradientButton alignSelf="flex-start" size="lg" fontSize={24} py={8} px={16} {...CONTRACT_LINK}>Try Now</GradientButton>            
          </Stack>
          <Spacer />
          <Box maxW={460}>
            <Image src="/pages/contracts-hero-1.png" />
          </Box>
        </Stack>
      </Container>

      <Box py={24} bg="#070C13">
        <Container maxW="container.xl">
          <Stack direction={{ base: 'column', md: 'row' }} spacing={12} align="center">
            <Box w="full">
              <Image src="/pages/contracts-hero-2.png" />
            </Box>
            <Box w="full">
              <Heading size="xl">Leverage the Edge:</Heading>
              <GradientHeading size="xl">Unparalleled Benefits with Xircus</GradientHeading>
              <Heading size="sm" color="gray.500" mb={6}>To design faster, prioritize clear goals, use advanced tools, foster collaboration, embrace agile methods, and stay updated with design trends and technologies.</Heading>
              <Grid templateColumns={{ base: 'repeat(2, 1fr)' }} gap={6}>
                <GridItem image="/pages/contract-rapid.png" title="Rapid Development" desc="Speed up your go-to-market with our intuitive tools." />
                <GridItem image="/pages/contract-cost.png" title="Cost Efficiency" desc="Minimize your expenses with streamlined contract management." />                
                <GridItem image="/pages/contract-scale.png" title="Scalability" desc="Speed up your go-to-market with our intuitive tools." />
                <GridItem image="/pages/contract-innov.png" title="Innovative Integration" desc="Stay ahead with AI-driven insights and capabilities." />
              </Grid>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={24}>
        <VStack mb={12}>
          <Heading size="xl">Revolutionizing Blockchain like no-one:</Heading>
          <GradientHeading size="xl">Effortless, Inclusive, Smart.</GradientHeading>        
        </VStack>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={12} align="center">
          <List w="full" spacing={4}>
            <FeatItem image="/pages/contract-evm.png" title="Full EVM Agnostic" desc="Seamless integration across chains, tokens, contracts, frontend,  backend." />
            <FeatItem image="/pages/contract-import.png" title="Smart Contract Import Manager" desc="Streamline and manage all your smart contract imports efficiently." />            
            <FeatItem image="/pages/contract-creation.png" title="No-Code Smart Contract Creation" desc="Craft robust smart contracts without a single line of code." />                        
            <FeatItem image="/pages/contract-ai.png" title="AI-Powered Smart Contract Creation" desc="Leverage AI for intuitive, next-gen smart contract design." />            
          </List>
          <Box w="full">
            <Image src="/pages/contracts-hero-3.png" />
          </Box>                    
        </Stack>
      </Container>

      <Container maxW="container.xl" py={24}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={12} align="center">
          <Box w="full" p={6} rounded="lg" borderWidth={1} borderColor="rgba(212, 217, 255, 0.20)" bg="rgba(40, 49, 100, 0.10)" minH={500}>
            <Image src="/pages/contract-compendium.png" boxSize="140px" mb={6} />
            <Heading mb={4}>Your Contract Compendium.</Heading>
            <Text mb={4}>Explore a diverse array of smart contracts ready to be utilized. From token protocols to intricate dApps, our library is constantly updated, ensuring you always have access to the most cutting-edge solutions.</Text>
            <Text>Learn More: <Button variant="link" as="a" href="https://beta.xircus.app/contracts/deploy" target="_blank">https://beta.xircus.app/contracts/deploy</Button></Text>
          </Box>
          <Box w="full" p={6} rounded="lg" borderWidth={1} borderColor="rgba(212, 217, 255, 0.20)" bg="rgba(40, 49, 100, 0.10)" minH={500}>
            <Image src="/pages/contract-crafted.png" boxSize="140px" mb={6} />
            <Heading mb={4}>Crafted by You. Powered by Xircus.</Heading>
            <UnorderedList spacing={4}>
              <ListItem>Your Own Smart Contracts: Seamlessly integrate custom solutions.</ListItem>
              <ListItem>Third-party Integrations: Incorporate trusted external contracts with ease.</ListItem>              
              <ListItem>Effortless Assimilation: Xircus framework ensures a smooth merge into our ecosystem.</ListItem>
            </UnorderedList>
          </Box>          
        </Stack>
      </Container>


      <Container maxW="container.xl" py={12}>
        <AspectRatio ratio={16/9} rounded="lg" overflow="hidden">
          <YouTube videoId="-MKd5nTQSlI" opts={{ width: '100%', height: '100%' }} />
        </AspectRatio>
      </Container>      

      <Container maxW="container.xl" py={12}>
        <GradientHeading size="xl">Resources</GradientHeading>                
        <Stack direction={{ base: 'column', md: 'row' }} spacing={12} align="center">
          <Box w="full" rounded="md" bgImage="/pages/contract-play.png" bgPos="center center" p={6}>
            <Heading mb={4}>Watch and Learn</Heading>
            <Text minH={180}>Step-by-step video guides unlocking the full potential of Xircus Web3 Protocol. Dive deep with visual tutorials tailored to empower both beginners and experts.</Text>
            <HStack>
              <GradientHeading size="sm">Watch Videos</GradientHeading>
              <Spacer />
              <IconButton icon={<TbArrowUpRight />} rounded="full" size="sm" bg="red.500" />
            </HStack>
          </Box>
          <Box w="full" rounded="md" bgImage="/pages/contract-play-2.png" bgPos="center center" p={6}>
            <Heading mb={4}>Every Detail, Decoded.</Heading>
            <Text minH={180}>Comprehensive documentation curated for developers. Navigate the intricacies of Xircus Web3 Protocol with clarity, from basic setup to advanced functionalities.</Text>
            <HStack>
              <GradientHeading size="sm">Read the docs</GradientHeading>
              <Spacer />
              <IconButton icon={<TbArrowUpRight />} rounded="full" size="sm" bg="red.500" />
            </HStack>            
          </Box>          
        </Stack>
      </Container>

      <Products />

      <Social />

      <Blockchains />

      <Whitelisting />

    </PublicLayout>
  )
}
