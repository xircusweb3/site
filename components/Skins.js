import { Avatar, Box, Container, Grid, Heading, HStack, Image } from "@chakra-ui/react"
import { GradientHeading } from "./Gradient"
import skins from './skins.json'

console.log("skins", skins)

// const skins = [
//   {
//     key: 'general',
//     name: 'General'
//   },
//   {
//     key: 'music',
//     name: 'Music'
//   },
//   {
//     key: 'reels',
//     name: 'Reels'
//   },
//   {
//     key: 'reels',
//     name: 'Reels'
//   },
//   {
//     key: 'reels',
//     name: 'Reels'
//   }      
// ]

const SkinCard = ({ name, slug }) => (
  <Box bg="#120F11" p={6} minW={200} rounded="md">
    <Image 
      src={`https://xw3.ams3.cdn.digitaloceanspaces.com/skins/${slug}-150.png`}
      fallbackSrc="https://xw3.ams3.cdn.digitaloceanspaces.com/skins/marketgeneral-150.png"
      mb={4}
      />
    <Heading size="md" textAlign="center">{name}</Heading>
  </Box>
)

export const Skins = () => {
  return (
    <Box>
      <Container maxW="container.xl" py={12}>
        <GradientHeading>Choose Your Favorite Skin</GradientHeading>
        <Heading size="md" mb={8}>Tailored fit to the niche and functionality</Heading>
        <Grid
            autoFlow="column" 
            overflowX="auto" 
            pb="20px" 
            sx={{ 
              '&::-webkit-scrollbar': { width: '6px', height: '6px', background: '#181818', borderRadius: '2px' },
              '&::-webkit-scrollbar-thumb': { background: '#fff', borderRadius: '2px' },
            }} scrollSnapType="x mandatory" gap={4}>
            {
              (skins || []).filter(s => s.appType == 'Marketplace').map(skin => <SkinCard key={skin._id} {...skin} />)
            }
         </Grid>
      </Container>
    </Box>
  )
}

