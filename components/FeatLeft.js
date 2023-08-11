import { List, Stack, Image, Container, ListItem, Heading, Text, VStack } from "@chakra-ui/react";
import { GradientHeading } from "./Gradient";

export const FeatItem = ({ title, desc }) => (
  <ListItem borderWidth={1} borderColor="rgba(255, 255, 255, 0.06)" p={4} rounded="md">
    <Heading size="md">{title}</Heading>
    <Text fontSize="sm" color="gray.500">{desc}</Text>
  </ListItem>
)

export const FeatLeft = ({ children, image, title }) => (
  <Container maxW="container.xl">
    <VStack mb={6}>
      <GradientHeading >{title}</GradientHeading>
    </VStack>
    <Stack direction={{ base: 'column', md: 'row' }} gap={12} align="center">
      <List w="full" spacing={4}>
        { children }
      </List>
      <Image src={image} />
    </Stack>
  </Container>
)