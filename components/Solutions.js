import { Box, Container, Text, Grid, Heading, HStack, Stack } from "@chakra-ui/react"
import { useTranslations } from "next-intl"

const Card = ({ title, desc, label, ...rest }) => (
  <Box 
    p={8} 
    w="full"
    bg="#120E11" 
    textAlign="center"
    borderColor="#1e1e1e" 
    maxW="280px" 
    rounded="lg" 
    borderWidth={2}
    transition="all 0.4s ease"
    cursor="pointer"
    _hover={{ transform: 'scale(1.08)' }}
    {...rest}
    >
    <Box borderWidth={4} py={10} mb={8} sx={{ borderImage: "linear-gradient(to bottom, #FF8D28, #F20074) 30%" }}>
      <Heading sx={{ wordSpacing: 300 }}>{title}</Heading>
    </Box>
    <Box p={4}>
      <Text>{desc}</Text>
      <Text color="#FF8C29">{label}</Text>       
    </Box>
  </Box>
)

export const Solutions = () => {
  const t = useTranslations('solutions')

  return (
    <Box id="solutions" py={24} mt={{ base: 0, md: 20 }}>
      <Container maxW="container.lg">
        <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 6, md: 12 }} align="center" justify="center">
          <Card title={t('title1')} desc={t('desc1')} label={t('label1')} as="a" href="#products" />
          <Card title={t('title2')} desc={t('desc2')} label={t('label2')} as="a" href="ttps://xircus-developer.gitbook.io/" target="_blank"/>
        </Stack>
      </Container>
    </Box>
  )
}