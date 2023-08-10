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

const SDK_LINK = {
  as: 'a',
  target: '_blank',
  href: 'https://www.npmjs.com/~xircusteam'
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

export default function SDKs() {
  return (
    <PublicLayout>

      <Container maxW="container.xl" py={24}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={16} align="center">
          <Stack maxW={500} spacing={8}>
            <Heading size="md">DEVELOPMENT KITS</Heading>
            <Heading size="3xl">
              Create, Code and Build
              <GradientHeading size="3xl" as="span" display=""> Web3 Apps</GradientHeading>
            </Heading>
            <Heading size="sm" color="gray.500">Build Apps using our Development Toolkits</Heading>
            <GradientButton alignSelf="flex-start" size="lg" fontSize={24} py={8} px={16} {...SDK_LINK}>Try Now</GradientButton>            
          </Stack>
          <Spacer />
          <Box maxW={460}>
            <Image src="/pages/sdk-hero-1.png" />
          </Box>
        </Stack>
      </Container>      

      <Box py={24} bg="#070C13">
        <Container maxW="container.xl">
          <Stack direction={{ base: 'column', md: 'row' }} spacing={12} align="center">
            <Box w="full">
              <Image src="/pages/sdk-hero-2.png" />
            </Box>
            <Box w="full">
              <Heading size="xl"><GradientHeading size="xl">Develop </GradientHeading> Faster</Heading>              
              <Heading size="sm" color="gray.500" mb={6}>To design faster, prioritize clear goals, use advanced tools, foster collaboration, embrace agile methods, and stay updated with design trends and technologies.</Heading>
              <Grid templateColumns={{ base: 'repeat(2, 1fr)' }} gap={6}>
                <GridItem image="/pages/contract-rapid.png" title="React SDK" desc="Speed up your go-to-market with our intuitive tools." />
                <GridItem image="/pages/contract-cost.png" title="Core SDK" desc="Minimize your expenses with streamlined contract management." />                
                <GridItem image="/pages/contract-scale.png" title="GraphQL SDK" desc="Speed up your go-to-market with our intuitive tools." />
                <GridItem image="/pages/contract-innov.png" title="Smart Contract SDK" desc="Stay ahead with AI-driven insights and capabilities." />
              </Grid>
            </Box>
          </Stack>
        </Container>
      </Box>      

      <Container maxW="container.xl" py={24}>
        <VStack mb={12}>
          <Heading size="xl">Build web3 apps faster than before</Heading>
          <GradientHeading size="xl">Effortless, Inclusive, Smart.</GradientHeading>        
        </VStack>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={12} align="center">
          <List w="full" spacing={4}>
            <FeatItem image="/pages/contract-evm.png" title="Regular Updates" desc="Seamless integration across chains, tokens, contracts, frontend,  backend." />
            <FeatItem image="/pages/contract-import.png" title="Easy To Use" desc="Streamline and manage all your smart contract imports efficiently." />            
            <FeatItem image="/pages/contract-creation.png" title="Connect To Any Chain" desc="Craft robust smart contracts without a single line of code." />                        
          </List>
          <Box w="full">
            <Image src="/pages/sdk-hero-3.png" />
          </Box>                    
        </Stack>
      </Container>      

      <Container maxW="container.xl" py={12}>
        <AspectRatio ratio={16/9} rounded="lg" overflow="hidden">
          <YouTube videoId="X7-fKXzlQzQ" opts={{ width: '100%', height: '100%' }} />
        </AspectRatio>
      </Container>         

      <Products />

      <Social />

      <Blockchains />

      <Whitelisting />      

    </PublicLayout>
  )
}
