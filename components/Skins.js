import { Avatar, Box, Container, Grid, Heading, HStack, Image } from "@chakra-ui/react"
import { useTranslations } from "next-intl"
import { GradientHeading } from "./Gradient"
import skins from './skins.json'

const SkinCard = ({ name, slug }) => (
  <Box bg="#120F11" p={6} minW={200} rounded="md" as="a" href="https://designer.xircus.app" target="_blank">
    <Image 
      src={`/skins/${slug}-150.png`}
      fallbackSrc="/skins/marketgeneral-150.png"
      mb={4}
      />
    <Heading size="md" textAlign="center">{name}</Heading>
  </Box>
)

export const Skins = () => {
  const t = useTranslations('skin')

  return (
    <Box>
      <Container maxW="container.xl" py={12}>
        <GradientHeading>{t('title')}</GradientHeading>
        <Heading size="md" mb={8}>{t('subtitle')}</Heading>
        <Grid
          autoFlow="column" 
          overflowX="auto" 
          pb="20px" 
          scrollSnapType="x mandatory"
          gap={4}
          sx={{
            '&::-webkit-scrollbar': { width: '6px', height: '6px', background: '#181818', borderRadius: '2px' },
            '&::-webkit-scrollbar-thumb': { background: '#718096', borderRadius: '2px' },
          }}>
          {
            (skins || []).filter(s => s.appType == 'Marketplace').map(skin => <SkinCard key={skin._id} {...skin} />)
          }
         </Grid>
      </Container>
    </Box>
  )
}

