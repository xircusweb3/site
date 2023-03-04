import { Container, Image, Center, Heading, Stack } from "@chakra-ui/react"

export default function Home() {
  return (
    <Container>
      <Center flexDirection="column" h="100vh">
        <Image src="/xircus-logo.svg" maxW={300} />
        <Heading textAlign="center">Xircus Web3 Protocol</Heading>
        <Stack spacing={{ base: 0, md: 8 }} color="gray.500" textAlign={{ base: 'center', md: 'left' }} direction={{ base: 'column', md: 'row' }}>
          <Heading size="md">NFTs</Heading>
          <Heading size="md">Prediction</Heading>          
          <Heading size="md">DeFi</Heading>
          <Heading size="md">GameFi</Heading>
          <Heading size="md">Launchpad</Heading>
        </Stack>
      </Center>
    </Container>
  )
}
