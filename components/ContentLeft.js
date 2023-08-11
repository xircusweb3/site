import { Box, Stack, Image, Text, Container } from "@chakra-ui/react";
import { GradientHeading } from "./Gradient";

export const ContentLeft = ({ image, title, desc }) => (
  <Container maxW="container.xl" py={{ base: 12, md: 24 }}>
    <Stack direction={{ base: 'column', md: 'row' }} align="center" gap={12}>
      <Box w="full">
        <Image src={image} />
      </Box>
      <Box w="full">
        <GradientHeading mb={6}>{title}</GradientHeading>
        <Text>{desc}</Text>
      </Box>    
    </Stack>
  </Container>
)