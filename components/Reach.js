import { Box, Container, Heading, Image } from "@chakra-ui/react"
import { useTranslations } from "next-intl"
import Link from "next/link"

export const Reach = () => {
  const t = useTranslations('reach')

  return (
    <Box py={24} id="aggregator">
      <Container textAlign="center" maxW="container.md">
        <Heading size="lg" maxW={500} mx="auto">{t('title')}</Heading>
        <Link href="/aggregator">
          <Box>
            <Image src="aggregator.png" w="full" />
          </Box>
        </Link>
      </Container>
    </Box>
  )
}