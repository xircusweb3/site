import { Box, Button, Container, Heading, Image, List, Stack, Text } from "@chakra-ui/react";
import { GradientHeading } from "./Gradient";
import { GradientButton } from "./GradientButton";

export const Whitelisting = () => (
  <Box py={12} bgGradient="linear-gradient(to-r, #031521, #010C15)" mb={24}>
    <Container maxW="container.xl">
      <Stack direction={{ base: 'column', md: 'row' }} align="center">
        <Stack w="full" gap={2}>
          <Heading>Join the <GradientHeading as="span" display="">Whitelist</GradientHeading></Heading>
          <Text>Be one step ahead in the crypto journey! Secure your spot on our exclusive whitelist and dive into a golden opportunity to purchase BEFORE our official token launch. Don&apos;t just watch the future unfold, be a part of it.</Text>
          <Text>Xircus: Where Exceptional Opportunitys Await </Text>
          <Text color="yellow">Reserve Now</Text>
          <GradientButton alignSelf="flex-start" size="lg" as="a" target="_blank" href="https://forms.gle/3W8upAmXMmqXK2fCA">Join NOW</GradientButton>
        </Stack>
        <Box w="full">
          <Box p={4}rounded="lg" shadow="base">
            <Image src="/pages/punks-hero-2.png" />
          </Box>
        </Box>
      </Stack>
    </Container>
  </Box>
)