import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react"
import { useTranslations } from "next-intl"
import { TbArrowRightBar, TbExternalLink, TbArrowRight, TbArrowRightTail } from "react-icons/tb"
import { GradientHeading } from "./Gradient"

export const HeroCustom = ({ overline = '', title = 'Create, Deploy and Scale Your Web3 Experience', desc = 'in minutes', href = '#', link = 'Deploy Now' }) => {
  const t = useTranslations('hero')
  return (
    <Box id="intro" pos="relative" minH={{ base: 400, md: 600 }}>
      <Container maxW="container.xl" py={{ base: 20, md: 40 }}>
        <Stack spacing={6} maxW={{ base: '100%', md: '50%' }} mb={6}>
          <Heading fontFamily="IBM Plex Sans" letterSpacing={2} size="lg" as="h1">{overline}</Heading>
          <GradientHeading as="h2" size="3xl">{title}</GradientHeading>
          <Heading size="md" color="gray.500">{desc}</Heading>
        </Stack>
        <Button size="lg" rightIcon={<TbArrowRight />} as="a" target="_blank" href={href}>{link}</Button>
      </Container>    
    </Box>
  )
}