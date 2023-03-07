import { Box, Container, Grid, Heading, HStack, IconButton, List, ListItem, Text } from "@chakra-ui/react"
import { useTranslations } from "next-intl"
import { useMemo, useState } from "react"
import { TbChevronDown } from "react-icons/tb"
import { GradientHeading } from "./Gradient"

const q1 = `
Platform Xircus V5 demo ✔️
Litepaper release ✔️
Product validation stage
Closed Alpha testing 
Onboarding Discord and Telegram team
Start Seed Round
Start listing/onboarding token community/projects in Xircus currency manager 
Xircus website UI/UX design + content improvement 
Developers documentation release
Deck release
Fiat payment support (fiat currency to $XW3 processing in the background)
Xircus SDK release
Xircus V5 platform beta launch
Xircus Developers Community launch
Commencing partnerships with blockchain networks
Kickoff series of Xircus Hackathons in partnership with Draper Startup House
Announcing first partners and advisors
Expanding Quality assurance/User experience team
Private/strategic sale rounds
Beta testing
Representing Xircus at Web3 and Blockchain conferences
Finalization of corporate structure Xircus Foundation
Whitelisting campaign $XW3
Xircus Studio first major UI/UX design improvements release
Start XircusSkins release
Marketing & PR campaigns to increase awareness of IDO 
Promotional airdrop campaign increasing $XW3 token/IDO popularity and Web3 dApp deployer
`

const q2 = `
Expanding Marketing team
Establishing Business development team
Exploring ISO 20022 certification
Exploring the Shari'ah compliance framework
Xircus Academy Launch
Marketing & PR campaigns to scale ‘creators’ user base 
Scaling Xircus Hackathons to multiple Draper Startup House locations in Asia
Scaling Xircus Hackathons with different partners in Middle-East/North Africa
First release Mobile app iOS & Android
IDO
Coinmarketcap and Coingecko listing
First Centralized exchange listings
Start R&D for our own advanced Xircus DEX
Start XircusPunks NFT marketing campaigns towards the launch
Xircus Provider Release
Xircus Launchpad Release
Xircus Aggregator Release
XircusPunks NFTs sale
DAO Governance and community proposal release
Establish partners for “off-chain” solutions Xircus Real Estate proposition 
`

const q3 = `
Scaling Xircus Hackathons to multiple Draper Startup House locations in Europe
Start of marketing campaigns release of “provider, launchpad and aggregator” 
Scaling Xircus Hackathons with different partners in US
Hosting Xircus Hackathons at Web3/Blockchain events
Start R&D XircusNodes
Listing on multiple centralized exchanges
Own DEX launch
Release of pre-built deployable mobile app for Ringmasters and devs iOS and Android
Start marketing campaigns release of “pre-built deployable mobile app for Ringmasters”
Launch Xircus Real Estate proposition
`

const q4 = `
Scaling Xircus Hackathons to multiple Draper Startup House locations in LATAM
Scaling Xircus Hackathons with partners in specific industries 
Onboarding industry specific advisors 
Hosting Xircus Hackathons at Web3/Blockchain events
Giveaway Xircus Graph Provider to Individual GraphQL Providers
Transition to Xircus Node Service
Tier-1 centralized exchange listings 
Xircus tv app for Apple tv & Android tv
Start R&D our own Blockchain  
`

const Timeline = ({ title, items, side = 'left' }) => {
  const [show, setShow] = useState(true)

  const toggleShow = () => setShow(!show)

  const renderList = useMemo(() => {
    if (show) {
      return items.map((item, itemKey) => <ListItem key={itemKey}>{item}</ListItem>)
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
        ? <Box w="14px" h="14px" bgGradient="linear(to-b, #FA1A85, #FF8D28)" rounded="full" pos="absolute" right="2px" />
        : <Box w="14px" h="14px" bgGradient="linear(to-b, #FA1A85, #FF8D28)" rounded="full" pos="absolute" left="-15px" />
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
