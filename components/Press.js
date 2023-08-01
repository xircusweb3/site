import { Box, Stack, HStack, Wrap, Image, Container, Heading } from '@chakra-ui/react'

const links = [
  {
    name: 'Cointelegraph',
    image: 'cointelegraph.png',
    url: 'https://cointelegraph.com/press-releases/xircus-web3-protocol-positioned-to-become-go-to-platform-for-web3/amp'
  },
  {
    name: 'Business Insider',
    image: 'business-insider-gray.png',
    url: 'https://markets.businessinsider.com/news/stocks/xircus-creates-the-first-multi-chain-dao-with-marketplaces-for-customized-tokenized-assets-to-help-creative-professionals-sell-ntfs-1030669598'
  },
  {
    name: 'Yahoo Finance',
    image: 'yahoo-finance-gray.png',
    url: 'https://finance.yahoo.com/news/xircus-created-worlds-first-multi-131500132.html'
  },
  {
    name: 'MarketWatch',
    image: 'market-watch-gray.png',
    url: 'https://www.marketwatch.com/press-release/xircus-creates-the-first-multi-chain-gamified-dao-nft-marketplace-platform-2021-07-22'
  },
  {
    name: 'AMBCrypto',
    image: 'ambcrypto-gray.png',
    url: 'https://ambcrypto.com/xircus-challenging-the-conventional-ideas-of-creating-and-selling-nfts/'
  },
  {
    name: 'NewsBTC',
    image: 'newsbtc-gray.png',
    url: 'https://www.newsbtc.com/press-releases/xircus-offers-advanced-solutions-to-create-nft-marketplace-grabs-attention-of-leading-institutional-investors/'
  },
  {
    name: 'Benzinga',
    image: 'bezinga-gray.png',
    url: 'https://www.benzinga.com/pressreleases/21/07/22060346/xircus-created-the-worlds-first-multi-chain-gamified-dao-platform-to-launch-custom-nft-marketplaces'
  },
  {
    name: 'Digital Journal',
    image: 'digital-journal-gray.png',
    url: 'https://www.digitaljournal.com/pr/xircus-created-the-worlds-first-multi-chain-gamified-dao-platform-to-launch-custom-nft-marketplaces'
  },
]

const PressLink = ({ url, name, image }) => (
  <Box as="a" href={url} target="_blank">
    <Image h="30px" src={`../assets/images/partners/${image}`} alt={name} />
  </Box>
)

export const Press = () => (
  <Container maxW="container.lg">
    <Wrap align="center" justify="center" spacing={{ base: 8, md: 16 }} px={{ base: 4, md: 0 }}>
      {
        links.map((link, linkKey) => <PressLink {...link} key={linkKey} />)
      }
    </Wrap>
  </Container>
)
