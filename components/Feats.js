import { Avatar, Box, Container, Grid, Heading, HStack, Wrap } from "@chakra-ui/react"
import { useTranslations } from "next-intl"
import { GradientHeading } from "./Gradient"

const items = [
  {
    key: 'share'
  },
  {
    key: 'agnostic'
  },
  {
    key: 'rewarding'
  },
  {
    key: 'democratize'
  },
  {
    key: 'decentralized'
  },
  {
    key: 'customizable'
  }  
]

const Item = ({ title }) => (
  <HStack p={{ base: 4, md: 8 }} bg="#120F11" rounded="full">
    <Avatar boxSize="50px" borderWidth={8} borderColor="#201914" src="xircus-logo.svg" p={2} />
    <Heading size="sm">{title}</Heading>
  </HStack>
)

export const Feats = () => {
  const t = useTranslations('feats')

  return (
    <Box id="features">
      <Container maxW="container.xl">
        <HStack justify="center" mb={12}>
          <Heading>{t('title1')}</Heading>
          <GradientHeading>{t('title2')}</GradientHeading>
        </HStack>
        <Grid templateColumns={{ base: 'auto', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={4}>
          {
            items.map(item => <Item key={item.key} title={t(item.key)} />)
          }
        </Grid>
      </Container>
    </Box>
  )
}