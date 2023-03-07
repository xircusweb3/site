import { Box, Center, Container, Heading, HStack, Image, Stack } from "@chakra-ui/react"
import { useTranslations } from "next-intl"
import { GradientHeading } from "./Gradient"

export const Token = () => {
  const t = useTranslations('token')

  return (
    <Box id="xw3">
      <Container maxW="container.xl" textAlign="center" my={16}>
        <Stack direction={{ base: 'column', md: 'row' }} justify="center" mb={12}>
          <Heading>{t('title1')}</Heading>
          <GradientHeading>{t('title2')}</GradientHeading>
        </Stack>
        <Center maxW={960} mx="auto">
          <Image src="token.png" />
        </Center>
      </Container>
    </Box>
  )
}