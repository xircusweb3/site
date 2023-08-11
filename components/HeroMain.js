import { Container, Stack, Heading, Image, Spacer, Box } from "@chakra-ui/react"
import { GradientHeading } from "./Gradient"
import { GradientButton } from "./GradientButton"

export const HeroMain = ({ image = '', overline = '', title = '', subtitle = '', desc = '', action = 'Try Now', href = '#' }) => (
  <Container maxW="container.xl" py={24}>
    <Stack direction={{ base: 'column', md: 'row' }} spacing={16} align="center">
      <Stack maxW={500} spacing={4}>
        <Heading size="sm" letterSpacing={2} textTransform="uppercase">{overline}</Heading>
        <GradientHeading size="3xl">{title}</GradientHeading>
        <Heading size="sm" lineHeight={1.5} color="gray.500">{desc}</Heading>
        <GradientButton alignSelf="flex-start" size="lg" fontSize={24} py={8} px={16} as="a" href={href} target="_blank">{action}</GradientButton>            
      </Stack>
      <Spacer />
      <Box maxW={460}>
        <Image src={image} />
      </Box>
    </Stack>
  </Container>        
)