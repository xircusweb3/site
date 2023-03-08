import { Box, Container, Grid, Heading, Highlight, HStack, IconButton, List, ListItem, Text } from "@chakra-ui/react"
import { useTranslations } from "next-intl"
import { useMemo, useState } from "react"
import { TbChevronDown } from "react-icons/tb"
import { GradientHeading } from "./Gradient"

const q1 = `
>Platform Xircus V5 demo
>Litepaper Release
>Product Validation Stage
>Closed Alpha Testing 
>Onboarding Discord and Telegram Team
>Start Seed Round
>Xircus website UI/UX design + Content Improvement 
>Developer Documentation Release
>Deck release
>Fiat-to-crypto conversion integration with payment aggregators
>Xircus SDK Release
>Xircus V5 Platform Beta Launch
>Commencing Partnerships with Blockchain Networks
=Announcing First Partners and Advisors
=Xircus Developers Community launch
=Listing token community and projects to promote currencies
=Kickoff Series of Hackathons in Partnership with Draper Startup House
=Expanding Quality Assurance Team
Private and Strategic Sale Rounds
Beta Testing
Representing Xircus at Web3 and Blockchain Conferences
Finalization of Corporate Structure for Xircus Foundation
Whitelisting campaign $XW3
Xircus Studio First Major UI/UX Design Improvement Release
Start XircusPunks Release
Start XircusSkins Release
Marketing & PR Campaigns To Increase IDO  Awareness
Promotional Airdrop Campaign for $XW3
Promotional for Web3 App Deployer
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
        ? <Box w="14px" h="14px" bgGradient="linear(to-b, #FA1A85, #FF8D28)" rounded="full" pos="absolute" right="-10px" />
        : <Box w="14px" h="14px" bgGradient="linear(to-b, #FA1A85, #FF8D28)" rounded="full" pos="absolute" left="-5px" />
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
