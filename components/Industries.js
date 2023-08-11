import { Box, Container, Grid, Heading, VStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { GradientHeading } from "./Gradient";

const GridItem = ({ title, desc, image, href = '#' }) => (
  <Link href={href}>
    <VStack textAlign="center" borderWidth={1} p={6} rounded="md" spacing={4} borderColor="rgba(212, 217, 255, 0.20)" bg="rgba(40, 49, 100, 0.10)">
      <Heading size="md">{title}</Heading>
      <Text fontSize="sm" color="gray.500">{desc}</Text>
    </VStack>
  </Link>
)

export const Industries = () => (
  <Container maxW="container.xl" py={24}>
    <VStack mb={6}>
      <GradientHeading>Web3 Industries</GradientHeading>
    </VStack>
    <Grid templateColumns={{ base: 'auto', md: 'repeat(4, 1fr)' }} gap={6}>
      <GridItem title="NFT Marketplaces" desc="Buy and sell NFTs, customize your listing and transaction fees" />
      <GridItem title="DeFi Services" desc="Instantly manage liquidity, swap tokens and farm yields" />      
      <GridItem title="Launchpads" desc="Let your community deploy crowdfunding for their tokens" />
      <GridItem title="Prediction Markets" desc="Predict the future outcome of every markets, events or activities" />
      <GridItem title="Social Platforms" desc="Connect every user with gamified web3 experience" />      
      <GridItem title="Community Campaigns" desc="Set instant rewards for every campaigns launched" />
      <GridItem title="Play To Earn" desc="Integrate play to earn services for your blockchain games" />      
      <GridItem title="Fractionals and Rentals" desc="Fractionalized any asset, earn revenue through rentals" />
    </Grid>
  </Container>
)