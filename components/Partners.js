import { Box, Wrap, Image, Center, Tooltip, Container } from '@chakra-ui/react'
import { GradientHeading } from './Gradient'

const links = [
  {
    name: 'Draper Startup House',
    image: 'draper.png',
    url: 'https://xircus.medium.com/xircus-x-draper-startup-house-web3-hackathon-and-collaboration-initiative-b637c236a91b'
  },
  {
    name: 'Aurora Blockchain',
    image: 'aurora.png',
    url: 'https://xircus.medium.com/xircus-web3-protocol-joins-forces-with-aurora-unlocking-new-possibilities-for-developers-bc725ea358ef'
  },
  {
    name: 'TON Blockchain',
    image: 'ton-blockchain.png',
    url: 'https://xircus.medium.com/implementing-ton-in-xircus-web3-protocol-telegram-mini-apps-in-minutes-9f85c76c281a'
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
    name: 'IoTeX Blockchain Ecosystem',
    image: 'iotex.png',
    url: 'https://twitter.com/Raullen/status/1631362440855445504'
  },
  {
    name: 'InnMind',
    image: 'innmind.png',
    url: 'https://xircus.medium.com/xircus-being-accelerated-by-innmind-web3-accelerator-fall-2023-cohort-c961e36b41d5'
  },        
  {
    name: 'Gotbit',
    image: 'gotbit.png',
    url: 'https://gotbit.io'
  },      
  {
    name: 'Telegram',
    image: 'telegram.png',
    url: 'https://ton.org/mini-apps'
  },      
  {
    name: 'Alchemy',
    image: 'alchemy.png',
    url: 'https://www.alchemy.com'
  },        
  {
    name: 'Hangry Animals',
    image: 'hangry-animals.png',
    url: 'https://hangryanimals.com'
  },   
  {
    name: 'Eywa',
    image: 'eywa.svg',
    url: 'https://xircus.medium.com/xircus-and-eywa-join-forces-a-strategic-move-towards-efficient-liquidity-management-f0e8585314d6'
  },      
  {
    name: 'Zealy',
    image: 'zealy.png',
    url: 'https://zealy.io/c/xircus/questboard'
  },  
  {
    name: 'Smoothie',
    image: 'smoothie.png',
    url: 'https://smoothie.so/product/development-softwares/xircus-web3-protocol/oyl0v9yl'
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
