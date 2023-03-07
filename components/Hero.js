import { Box, Button, Container, Heading, HStack, Stack, VStack } from "@chakra-ui/react"
import { useTranslations } from "next-intl"

const headingStyle = {
  size: {
    base: '2xl',
    md: '3xl',
  },
  mb: {
    base: 2,
    md: 4
  },
  fontWeight: 900
}

const gradientStyle = {
  bgGradient: 'linear(to-r, #FF8D28, #F20074)',
}

const gradientTextStyle = {
  ...gradientStyle,
  display: 'inline-block',
  bgClip: 'text',
}

const labelStyle = {
  size: {
    base: 'sm', 
    md: 'md',
  },
  mb: 2
}

const btnStyle = {
  borderWidth: 1,
  size: { base: 'md', md: 'lg' },
  w: { base: 'full', md: 'auto' }
}

export const Hero = () => {
  const t = useTranslations('hero')
  return (
    <Box id="intro" bgImage="xircus-globe.png" minH={{ base: 400, md: 600 }} bgSize="contain" bgRepeat="no-repeat" bgPos={{  base: 'right -160px top 50%', sm: 'right -50px top 50%', md: 'right center'}}>
      <Container maxW="container.xl" py={{ base: 20, md: 40 }}>
        <Box mb={{ base: 6, md: 8 }}>
          <Heading {...headingStyle}><Box {...gradientTextStyle}>{t('title1')}</Box></Heading>
          <Heading {...headingStyle}><Box {...gradientTextStyle}>{t('title2')}</Box>{t('title3')}</Heading>        
          <Heading {...headingStyle} color="gray.500">{t('title4')}</Heading>
        </Box>
        <HStack spacing={0} w="full">
          <Box w="30px" display={{ base: 'none', md: 'flex' }} borderLeftWidth={1} borderBottomWidth={1} borderBottomLeftRadius="40px" borderColor="white" h="110px" alignSelf="flex-start" mr={4}>

          </Box>
          <Box w="full">
            <Box mb={{ base: 6, md: 8 }}>
              <Heading {...labelStyle}>{t('label1')}</Heading>
              <Heading {...labelStyle}>{t('label2')}</Heading>
            </Box>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 3, md: 4 }}>
              <Button {...btnStyle} as="a" href="https://xircus-apr-hackathon-manila.devpost.com/" target="_blank">{t('action1')}</Button>         
              <Button {...gradientStyle} {...btnStyle} _hover={{ ...gradientStyle }} as="a" href="https://forms.gle/zDQxVPMr1p2LmWwG7" target="_blank">{t('action2')}</Button>                     
            </Stack>
          </Box>
        </HStack>
      </Container>
    </Box>
  )
}