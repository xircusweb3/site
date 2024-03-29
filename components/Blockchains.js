import { useRef } from 'react'
import {
  Box, Container, Heading, Wrap,
  Image, Text, Badge, Tooltip, Button,
} from '@chakra-ui/react';
import { useTranslations } from 'next-intl'
import { MotionVStack } from './Motion'
import { Zoom } from 'react-awesome-reveal'
import { GradientHeading } from './Gradient';
import { TbExternalLink } from 'react-icons/tb';

const items = [
  {
    image: 'aurora-white.png',
    title: 'Aurora',
  },
  {
    image: 'base-white.png',
    title: 'Base',
  },
  {
    image: 'fantom-white.png',
    title: 'Fantom',
  },
  {
    image: 'eth-white.png',
    title: 'Ethereum',
  },
  {
    image: 'bsc-white.png',
    title: 'Binance Chain',
  },
  {
    image: 'polygon-white.png',
    title: 'Polygon',
  },
  {
    image: 'iotex-white.svg',
    title: 'IoTeX',
  },  
  {
    image: 'moonbeam-white.png',
    title: 'Moonbeam',
  },
  {
    image: 'avalanche-white.png',
    title: 'Avalanche',
  },
  {
    image: 'celo-white.png',
    title: 'Celo',
  },
  {
    image: 'okx-white.png',
    title: 'OKX',
  },  
  {
    image: 'gnosis-white.png',
    title: 'Gnosis',
  },
  {
    image: 'arbitrum-white.png',
    title: 'Arbitrum',
  },
  {
    image: 'optimism-white.png',
    title: 'Optimism',
  },  
  {
    image: 'oasis-white.png',
    title: 'Oasis',
  },
  {
    image: 'moon-river-white.png',
    title: 'Moonriver',
    disabled: true
  },  
  {
    image: 'poa-white.png',
    title: 'POA',
    disabled: true
  },
  {
    image: 'heco-white.png',
    title: 'HECO',
    disabled: true
  },
  {
    image: 'fuse-white.png',
    title: 'Fuse',
    disabled: true
  },
  {
    image: 'tezos-white.png',
    title: 'Tezos',
    status: 'Soon',
    disabled: true
  },  
  {
    image: 'solana-white.png',
    title: 'Solana',
    status: 'Soon',
    disabled: true
  },
  {
    image: 'flow-white.png',
    title: 'Flow',
    status: 'Soon',
    disabled: true
  },
  {
    image: 'near-white.png',
    title: 'Near',
    status: 'Soon',
    disabled: true
  },
  {
    image: 'aptos-white.png',
    title: 'Aptos',
    status: 'Soon',
    disabled: true
  },  
]

export const Blockchains = () => {
  const t = useTranslations('blockchains')

  return (
    <Box py={24} id="blockchains">
      <Container maxW="container.lg" centerContent textAlign="center">
        <GradientHeading mb={6}>{t('title')}</GradientHeading>
        <Heading size="md" color="gray.500" mb={2}>{t('subtitle')}</Heading>
        <Heading size="md" color="gray.500" mb={8}>{t('subtitle1')}</Heading>
        <Button as="a" variant="outline" rightIcon={<TbExternalLink />} borderColor="gray.100" _dark={{ borderColor: 'gray.900' }} href="https://beta.xircus.app/developers#chains" target="_blank">View All Supported Chains</Button>
        <Wrap justify="center" spacing={3} py={10}>
          {
            items.map((item, itemKey) => (
              <Zoom key={itemKey}>
                <Tooltip label={item.title}>
                  <MotionVStack
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    minW="75px" cursor="pointer">
                    <Image my={2} src={`../assets/images/blockchains/${item.image}`} h="50px" w="auto" alt={item.name} opacity={item.disabled ? '0.5' : '1'} />
                    { item.status && <Badge borderRadius="full" colorScheme="green" fontSize="10px">{item.status}</Badge> }
                  </MotionVStack>
                </Tooltip>
              </Zoom>
            ))
          }
        </Wrap>
      </Container>
    </Box>
  )
}

{/* <Text fontSize="md" fontWeight="bold" textTransform="uppercase" color={item.disabled ? 'gray.500' : '#fff'}>{item.title}</Text> */}

