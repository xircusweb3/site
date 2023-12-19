import { Box, Wrap, Image, Center, Tooltip, Container } from '@chakra-ui/react'
import { GradientHeading } from './Gradient'

const links = [
  {
    name: 'Draper Startup House',
    image: 'draper.png',
    url: 'https://xircus.medium.com/xircus-x-draper-startup-house-web3-hackathon-and-collaboration-initiative-b637c236a91b'
  },
  {
    name: 'IoTeX Blockchain Ecosystem',
    image: 'iotex.png',
    url: 'https://twitter.com/Raullen/status/1631362440855445504'
  },
  {
    name: 'Aurora EVM on Near Blockchain',
    image: 'aurora.png',
    url: 'https://xircus.medium.com/xircus-web3-protocol-joins-forces-with-aurora-unlocking-new-possibilities-for-developers-bc725ea358ef'
  },
  {
    name: 'MagikLabs Payment Aggregator',
    image: 'magik-labs.png',
    url: 'https://xircus.medium.com/xircus-x-magik-labs-breaking-down-the-barriers-bde3d5d612c6'
  },
  {
    name: 'Onramper',
    image: 'onramper.svg',
    url: 'https://onramper.com/'
  },
  {
    name: 'Web3 Arabs Education Platform',
    image: 'web3-arabs.png',
    url: 'https://xircus.medium.com/xircus-x-web3-arabs-when-theory-becomes-a-working-dapp-2ddb80dcd52f'
  },
  {
    name: 'Pinksale',
    image: 'pinksale-white.png',
    url: 'https://www.pinksale.finance/'
  },  
  {
    name: 'DEXView',
    image: 'dexview.png',
    url: 'https://www.dexview.com'
  },    
]

const PressLink = ({ url, name, image }) => (
  <Box as="a" href={url} target="_blank">
    <Tooltip label={name}>
      <Image h={75} maxW={200} src={`../assets/partners/${image}`} alt={name} transition="all 400ms ease" _hover={{ opacity: 0.8, transform: 'scale(1.1)' }} />
    </Tooltip>
  </Box>
)

export const Partners = () => (
  <Container py={16} maxW="container.lg">
    <Center pb={8}>
      <GradientHeading>Our Partners</GradientHeading>
    </Center>
    <Wrap align="center" justify="center" spacing={{ base: 8, md: 16 }} px={{ base: 4, md: 0 }} >
      {
        links.map((link, linkKey) => <PressLink {...link} key={linkKey} />)
      }
    </Wrap>
  </Container>
)
