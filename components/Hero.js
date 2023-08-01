import { Box, Button, Container, Heading, HStack, Stack, VStack } from "@chakra-ui/react"
import { OrbitControls, PointMaterial, Points } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { random } from "maath"
// import * as random from 'maath/random/dist/maath-random.esm'
import { useTranslations } from "next-intl"
import { useRef, useState } from "react"
import { GradientHeading } from "./Gradient"

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
  borderWidth: 2,
  size: { base: 'md', md: 'lg' },
  w: { base: 'full', md: 'auto' }
}

const Stars = (props) => {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(2000), { radius: 1.5 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ff0000" size={0.01} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

export const Hero = () => {
  const t = useTranslations('hero')
  return (
    <Box id="intro" pos="relative" minH={{ base: 400, md: 600 }}>
      <Container maxW="container.xl" py={{ base: 20, md: 40 }}>
        <Box mb={{ base: 6, md: 8 }}>
          <GradientHeading size="3xl">{t('title1')}</GradientHeading>
          <Heading size="3xl"><GradientHeading size="3xl" as="span">{t('title2')}</GradientHeading>{t('title3')}</Heading>        
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
              <Button {...btnStyle} as="a" _dark={{ bg: 'transparent', borderColor: 'gray.900', _hover: { borderColor: 'gray.700' } }} href="https://forms.gle/3W8upAmXMmqXK2fCA" target="_blank">{t('action1')}</Button>         
              <Button {...gradientStyle} {...btnStyle} _hover={{ ...gradientStyle }} as="a" href="https://forms.gle/zDQxVPMr1p2LmWwG7" target="_blank">{t('action2')}</Button>                     
            </Stack>
          </Box>
        </HStack>
      </Container>        
    </Box>
  )
}