import { Box, Container, Heading, Image } from "@chakra-ui/react"
import { useTranslations } from "next-intl"

export const Reach = () => {
  const t = useTranslations('reach')

  return (
    <Box py={24} id="aggregator">
      <Container textAlign="center" maxW="container.md">
        <Heading size="lg" maxW={500} mx="auto">{t('title')}</Heading>
        <Box as="a" target="_blank" href="https://xircus-web3-protocol.gitbook.io/xircus-web3-protocol/xircus-products-1/market-explorer/nft-aggegator">
          <Image src="aggregator.png" w="full" />
        </Box>
      </Container>
    </Box>
  )
}