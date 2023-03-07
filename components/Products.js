import { Box, Container, Grid, Heading, Stack, Text, VStack, Image } from "@chakra-ui/react"
import { useTranslations } from "next-intl"
import { GradientHeading } from "./Gradient"
import { Fade } from 'react-reveal'
import Link from "next/link"

const products = [
  'governance-product-icon.png',
  'nft-meta-product-icon.png',
  'dashboard-product-icon.png',
  'punks-product-icon.png',
  'skins-product-icon.png',
  'token-factory-product-icon.png',
  'deployer-product-icon.png',
  'provider-product-icon.png',
  // 'launchpad-product-icon.png',
  // 'market-product-icon.png',
  // 'stake-product-icon.png',
  // 'leaderboard-product-icon.png',
]

const prods = [
  {
    key: 'sdks',
    image: 'governance-product-icon.png',
    link: 'https://www.npmjs.com/~xircusteam',
  },
  {
    key: 'contracts',
    image: 'nft-meta-product-icon.png',
    link: 'https://beta.xircus.app/contracts'
  },
  {
    key: 'studio',
    image: 'dashboard-product-icon.png',
    link: 'https://beta.xircus.app'
  },
  {
    key: 'avatars',
    image: 'punks-product-icon.png',
    link: 'https://beta.xircus.app/punks'
  },
  {
    key: 'skins',
    image: 'skins-product-icon.png',
    link: 'https://beta.xircus.app/skins'
  },
  {
    key: 'blocks',
    image: 'provider-product-icon.png',
    link: 'https://beta.xircus.app'
  },
  {
    key: 'providers',
    image: 'deployer-product-icon.png',
    link: 'https://beta.xircus.app/providers'
  },
  {
    key: 'currencies',
    image: 'token-factory-product-icon.png',
    link: 'https://beta.xircus.app/currencies'
  }  
]

const ProductCard = ({ title, href, image }) => (
  <Fade cascade>
    <VStack
      as="a"
      target="_blank"
      href={href}
      transition="all 0.25s ease-out"
      bg="#120F11" 
      p={6}
      borderWidth={2}
      cursor="pointer"
      borderColor="transparent"
      borderRadius="lg" textAlign="center"
      _hover={{ transform: 'scale(1.1)', border: '2px solid orange' }}>
      <Image src={image} h="75px" w="auto" alt={title} />
      <Heading size="md">{title}</Heading>
    </VStack>
  </Fade>
)

export const Products = () => {
  const t = useTranslations('products')

  return (
    <Box>
      <Container maxW="container.xl" my={12} py={12} bg="#070607">
        <Stack direction={{ base: 'column', md: 'row' }} align="center">
          <Box maxW={440} p={{ base: 0, md: 8 }}>
            <GradientHeading size="lg">{t('title1')}</GradientHeading>
            <GradientHeading size="lg" mb={4}>{t('title2')}</GradientHeading>
            <Text color="#7B7B7B">
              {t('desc')}
            </Text>
          </Box>
          <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} flex={2} gap={4}>
            {
              prods.map((product) =>
                <ProductCard key={product.key}
                  href={product.link}
                  image={`../assets/images/products/${product.image}`}
                  title={t(product.key)}
                  />
              )
            }
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}