import { Box, Container, Grid, Heading, Highlight, HStack, IconButton, List, ListItem, Text } from "@chakra-ui/react"
import { useTranslations } from "next-intl"
import { useMemo, useState } from "react"
import { TbChevronDown } from "react-icons/tb"
import { GradientHeading } from "./Gradient"

const q1 = `
>Platform Xircus V5 demo
>Litepaper release
>Announcing Xircus Hackathons in partnership with Draper Startup House
>Announcing first partners and advisors
>Fiat payment support (fiat currency to $XW3 processing in the background)
>Start XircusSkins release
>Commencing partnerships with blockchain networks
>Commencing the Seed round
>Developers documentation release
>Start of Product validation stage
>Xircus website UI/UX design + content improvement 
>Expanding Quality assurance/User experience team
>Kickoff 2-days hackathon in Manila in partnership with Draper Startup House
>First version deck release
>Xircus SDK release
>Closed Alpha testing 
>Exploring the Shari'ah compliance framework
`

const q2 = `
>Xircus Studio V5 Release
>Prepare Scaling Xircus Hackathons in Asia
>Prepare scaling Xircus Hackathons in Middle-East
>Initial Xircus Designer release https://designer.xircus.app
>Deployment of Sandbox API for test web3 apps https://sandbox.xircus.app 
>Publishing of Xircus Open Source Smart Contracts for Community Deployment
>Xircus Designer Skin Presets
>Launch ofZealy token airdrop campaign
>Establishing LATAM team and community 
>Exploring and preparing contract generation using AI
>Xircus Studio first major UI/UX design improvements release
=Updated Deck release
=NFT General Marketplace UI Blocks
=NFT Music Marketplace UI Blocks
=NFT Adult/Fan Marketplace UI Blocks
=NFT Real Estate Marketplace UI Blocks
=NFT Ticket Marketplace UI Blocks
=NFT Meme Generative Marketplace UI Blocks
=DeFi Swap/Liquidity UI Blocks
Onboarding Discord and Telegram Team
Expanding Marketing team
Establishing Business development team
Start listing/onboarding token community/projects in Xircus currency manation
Marketing & PR campaigns to scale ‘creators’ user base 
Xircus Developers Community launch 
Finalization of corporate structure Xircus Foundation
`

const q3 = `
Scaling stage
Xircus Academy Launch
Marketing & PR campaigns to increase awareness of IDO 
Promotional airdrop campaign increasing $XW3 token/IDO popularity and Web3 dApp deployer
Representing Xircus at Web3 and Blockchain conferences
Whitelisting campaign $XW3
Token migration and unstaking
Smart Contract Generation using ChatGPT AI
IDO
Coinmarketcap and Coingecko listing
First Centralized exchange listings
Start XircusPunks NFT marketing campaigns towards the launch
Xircus Provider Release
Xircus Launchpad Release
Xircus Aggregator Release
XircusPunks NFTs sale
DAO Governance and community proposal release
Exploring ISO 20022 certification
Start R&D for our own advanced Xircus DEX
Establish partners for “off-chain” solutions Xircus Real Estate proposition 
Scaling Xircus Hackathons to locations in Europe
Start of marketing campaigns release of “provider, launchpad and aggregator” 
Scaling Xircus Hackathons to multiple Draper Startup House locations in LATAM
Hosting Xircus Hackathons at Web3/Blockchain events
Start R&D XircusNodes
Listing on multiple centralized exchanges
First release Mobile app iOS & Android
Start marketing campaigns release of “pre-built deployable mobile app for Ringmasters”
Launch Xircus Real Estate proposition
`

const q4 = `
Release of pre-built deployable mobile app for Ringmasters and devs iOS and Android
Scaling Xircus Hackathons with partners in specific industries 
Scaling Xircus Hackathons with different partners in US
Onboarding industry specific advisors 
Hosting Xircus Hackathons at Web3/Blockchain events
Giveaway Xircus Graph Provider to Individual GraphQL Providers
Transition to Xircus Node Service
Tier-1 centralized exchange listings 
Xircus tv app for Apple tv & Android tv
Start R&D our own Blockchain
Own DEX launch  
`

const Timeline = ({ title, items, side = 'left' }) => {
  const [show, setShow] = useState(true)

  const toggleShow = () => setShow(!show)

  const renderItem = (item) => {
    if (item.startsWith('>')) {
      return <Box fontWeight="bold" color="green.500">{item.replace('>', '✅ ')}</Box> 
    }

    if (item.startsWith('=')) {
      return <Box fontWeight="bold" color="green.500">{item.replace('=', '🚧 ')}</Box> 
    }

    return <Box fontWeight="bold" color="gray.500" pl={6}>{item}</Box>
  }

  const renderList = useMemo(() => {
    if (show) {
      return items.map((item, itemKey) => <ListItem key={itemKey}>{renderItem(item)}</ListItem>)
    }
  }, [items, show])

  return (
    <Box 
      pr={{ base: 0, md: side == 'left' && 12 }}
      pl={{ base: 0, md: side == 'right' && 12 }}
      pos="relative"
      mb={10}
      >
      <Box display={{ base: 'none', md: 'block' }}>
      {
        side == 'left'
        ? <Box w="14px" h="14px" bgGradient="linear(to-b, #FA1A85, #FF8D28)" rounded="full" pos="absolute" right="-36px" />
        : <Box w="14px" h="14px" bgGradient="linear(to-b, #FA1A85, #FF8D28)" rounded="full" pos="absolute" left="22px" />
      }
      </Box>
      <HStack mb={6} justify="space-between">
        <GradientHeading>{title}</GradientHeading>
        <IconButton display={{ base: 'flex', md: 'none' }} icon={<TbChevronDown />} onClick={toggleShow} />
      </HStack>
      <List>
      {renderList}
      </List>
    </Box>      
  )
}

export const Roadmap = () => {
  const t = useTranslations('roadmap')

  return (
    <Box id="roadmap">
      <Container maxW="container.xl" pos="relative">
        <Heading mb={12}>{t('title')}</Heading>
        <Box h="full" w="5px" display={{ base: 'none', md: 'block' }} bgGradient="linear(to-t, #FA1A85, #FF8D28)" pos="absolute" left="50%" rounded="full" />
        <Grid templateColumns={{ base: 'auto', md: 'auto auto' }}>
          <Timeline title={t('title1')} items={q1.split(`\n`)} />
          <Box bg="#080402" />
          <Box bg="#080402" />
          <Timeline title={t('title2')} side="right" items={q2.split(`\n`)} />          
          <Box bg="#080402" />
          <Box bg="#080402" />
          <Timeline title={t('title3')} items={q3.split(`\n`)} />                    
          <Box bg="#080402" />
          <Box bg="#080402" />
          <Timeline title={t('title4')} side="right" items={q4.split(`\n`)} />                              
        </Grid>
      </Container>
    </Box>
  )
}

// 

{/* <Box h="full" w="10px" bg="transparent" />
<Box bg="#080402" />
<Box bg="#080402" />
<Box h="full" w="10px" bg="transparent" /> */}
