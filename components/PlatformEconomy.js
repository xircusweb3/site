import { Divider, Container, Stack, Box, Heading, Flex, Image, UnorderedList, ListItem, Text } from "@chakra-ui/react";
import { GradientHeading } from "./Gradient";
import { Card } from "./Card";

export const PlatformEconomy = () => (
  <Container maxW="container.xl" py={24}>
    <Stack direction={{ base: 'column', md: 'row' }} gap={{ base: 4, md: 12 }} mb={12}>
      <Stack w="full" spacing={4}>
        <GradientHeading>Platform Economy</GradientHeading>
        <Heading size="md">Introducing the Xircus Platform Economy</Heading>
        <Heading size="sm" color="gray.500" maxW={600}>The Xircus economy serves as the foundation for the entire Xircus ecosystem, seamlessly integrating the token holders, designers community, developers community, and its dApp owners into a unified model.</Heading>
      </Stack>        
      <Box borderWidth={1} borderColor="rgba(212, 217, 255, 0.20)" bg="rgba(40, 49, 100, 0.10)" p={6} rounded="lg">
        <GradientHeading size="md">Self-sustaining token economy</GradientHeading>
        <Divider my={4} />
        <GradientHeading size="md">Incentivizing platform users</GradientHeading>        
      </Box>                  
    </Stack>     
    <Image src="/pages/platform-economy.png" my={12} />
    <Stack direction={{ base: 'column', md: 'row' }} gap={{ base: 4, md: 12 }}>
      <Card w="full">
        <Heading size="md" mb={4}>At its core lie four unique & distinct type of tokens:</Heading>       
        <UnorderedList color="gray.500">
          <ListItem>XW3 for rewards and payments</ListItem>  
          <ListItem>XPS (XircusPunks) for governance</ListItem>            
          <ListItem>XST (XircusSkins) as designer-driven templates</ListItem>  
          <ListItem>XMD (XircusModules) as developer-crafted add-ons.</ListItem>  
        </UnorderedList> 
      </Card>
      <Card w="full">
        <Text color="gray.500">These tokens serve as a catalyst for collaboration, unlocking scaling opportunities and driving innovation within an interconnected web3 community space. Together, they weave a tapestry of cooperation and growth, shaping the future of decentralized interaction.</Text>
      </Card>
    </Stack>
  </Container>        
)