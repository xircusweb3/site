import { Box, Container, Text, Grid, Heading, HStack, Stack } from "@chakra-ui/react"
import { useTranslations } from "next-intl"
import Link from "next/link"

const Card = ({ title, subtitle, desc, label, ...rest }) => (
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
    <Box p={4} pb={2}>
      <Heading size="sm" color="gray.500" mb={2} fontWeight="bold" minH={20}>{subtitle}</Heading>
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
          <Link href="/studio-app-deployer">
            <Card title={t('title1')} subtitle={t('subtitle1')} desc={t('desc1')} label={t('label1')} />
          </Link>
          <Link href="/sdks-development-kits">
            <Card title={t('title2')} subtitle={t('subtitle2')} desc={t('desc2')} label={t('label2')} />
          </Link>
          <Link href="/designer-page-builder"> 
            <Card title={t('title3')} subtitle={t('subtitle3')} desc={t('desc3')} label={t('label3')}/>          
          </Link>
        </Stack>
      </Container>
    </Box>
  )
}