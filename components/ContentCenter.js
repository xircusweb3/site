import { Box, Stack, Image, Text, Container, VStack } from "@chakra-ui/react";
import { GradientHeading } from "./Gradient";

export const ContentCenter = ({ image, title, desc, ...rest }) => (
  <Container maxW="container.xl" py={24} {...rest}>
    <VStack textAlign="center" gap={4}>
      <GradientHeading>{title}</GradientHeading>
      <Text maxW={740} color="gray.500">{desc}</Text>
      <Image src={image} />
    </VStack>
  </Container>
)