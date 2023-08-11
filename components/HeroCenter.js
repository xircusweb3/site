import { Container, Stack, Heading, Text, Image, VStack } from "@chakra-ui/react"
import { GradientHeading } from "./Gradient"
import { GradientButton } from "./GradientButton"

export const HeroCenter = ({ overline, title, subtitle, subtitle2, desc, href = '#', image, link = 'Join Now', imageProps, ...rest }) => (
  <Container maxW="container.xl" py={24} {...rest}>
    <Stack textAlign="center" gap={4} maxW="container.md" mx="auto">
      <Heading fontSize={{ base: 'xs', md: 'md' }} textTransform="uppercase" letterSpacing={4}>{overline}</Heading>
      <VStack spacing={0}>
        <GradientHeading size={{ base: 'xl', md: '4xl' }}>{title}</GradientHeading>
        <GradientHeading size={{ base: 'xl', md: '4xl' }}>{subtitle}</GradientHeading>
        <GradientHeading size={{ base: 'xl', md: '4xl' }}>{subtitle2}</GradientHeading>      
      </VStack>
      <Text fontSize={{ base: 'sm', md: 'xl' }} color="gray.500">{desc}</Text>
      <GradientButton alignSelf="center" size="lg" py={8} px={16} as="a" target="_blank" href={href}>{link}</GradientButton>
    </Stack>
    <Image src={image} {...imageProps} />
  </Container>  
)