import {
  Avatar, Box, Container, Grid, Stack,
  Heading, HStack, VStack, Text,
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { Slide, Fade, Flip } from 'react-reveal'

const User = ({ avatar, name, role, href = '/' }) => (
  <Fade top cascade>
    <Stack align="center" gap={4}  transition="all 250ms ease-out" _hover={{ transform: 'scale(1.1)' }} textAlign="center" {...(href ? { as: 'a', href, target: '_blank' } : {})} px={4}>
      <Avatar border={0} boxSize="160px" src={avatar} />
      <Heading size="lg">{name}</Heading>
      <Heading size="md" color="gray.500">{role}</Heading>
    </Stack>
  </Fade>
)

const TEAM_ASSETS = '../assets/team/'

export const Team = () => {
  const t = useTranslations('team')

  return (
    <Box py={40}>
      <Container maxW="container.lg" centerContent textAlign="center">
        <Box mb={10}>
          <Stack direction={{ base: 'column', md: 'row' }} justify="center" align="center" spacing={12}>
            <User 
              avatar={`${TEAM_ASSETS}falco.png`} 
              name="Falco Pangkey" 
              role="CEO"
              href="https://www.linkedin.com/in/falcopangkey/"
              />
            <User 
              avatar={`${TEAM_ASSETS}mikey.png`}
              name="Michael Molina" 
              role="CTO"
              href="https://www.linkedin.com/in/drybfounder/"
              />
            <User 
              avatar={`${TEAM_ASSETS}erik.png`} 
              name="Erik de Groot" 
              role="COO"
              href="http://www.linkedin.com/in/erikmdegroot"
              />
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

// <User avatar={`${TEAM_ASSETS}utsav.png`} name="Utsav Kumar" role="Content Lead" />
// <User avatar={`${TEAM_ASSETS}shafeeq.png`} name="Shafeeq Qureshi" role="Advisor (Middle East)" />
// <User avatar={`${TEAM_ASSETS}jen.png`} name="Jen Buakaew" role="Advisor (Asia)" />