import {
  Box, Heading, Text, Grid, HStack, Stack,
  Container, Image, Avatar
 } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { Slide } from 'react-reveal'
import { GradientHeading } from './Gradient'

const items = [
  'dao.png',
  'creator.png',
  'collector.png',
  'marketplace_owner.png',
  'provider.png',
  'ambassador.png',
  'provider.png',  
]

const EarnCard = ({ image, title, text }) => (
  <Slide left cascade>
    <HStack gap={4}>
      <Image src={image} boxSize={20} alt={title} borderRadius="full" />
      <Box>
        <Heading size="md" mb={2}>{title}</Heading>
        <Text fontSize="sm" color="gray.500">{text}</Text>
      </Box>
    </HStack>
  </Slide>
)

export const Earn = () => {
  const t = useTranslations('earn')
  return (
    <Box id="how-to-earn">
      <Container maxW="container.lg" py={24}>
        <Stack direction={{ base: 'column', md: 'row' }} align="center" justify="center" mb={12}>
          <Heading>{t('title')}</Heading>
          <GradientHeading>{t('subtitle')}</GradientHeading>
        </Stack>
        <Grid templateColumns={{ base: 'auto', md: 'repeat(2, 1fr)' }} gap={6}>
          {
            items.map((item, itemKey) =>
              <EarnCard
                image={`../assets/images/earn/${item}`}
                title={t(`title${itemKey}`)}
                text={t(`text${itemKey}`)}
                key={itemKey} />
            )
          }
        </Grid>
      </Container>
    </Box>
  )
}
