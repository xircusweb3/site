import {
  Avatar, Box, Container, Grid, Stack,
  Heading, HStack, VStack, Text, Wrap, Flex,
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { Slide, Fade, Flip } from 'react-awesome-reveal'

const Founder = ({ avatar, name, role, href = '/' }) => (
  <Fade top cascade>
    <Stack w={{ base: 'auto', md: 300 }} p={4} align="center" gap={2}  transition="all 250ms ease-out" _hover={{ transform: 'scale(1.1)' }} textAlign="center" {...(href ? { as: 'a', href, target: '_blank' } : {})} px={4}>
      <Avatar border={0} boxSize="160px" src={avatar} />
      <Heading size="md">{name}</Heading>
      <Heading size="sm" color="gray.500">{role}</Heading>
    </Stack>
  </Fade>
)

const Member = ({ avatar, name, role, desc, href = '/' }) => (
  <Fade top cascade>
    <Stack maxW={340} align="center" transition="all 250ms ease-out" _hover={{ transform: 'scale(1.1)' }} textAlign="center" {...(href ? { as: 'a', href, target: '_blank' } : {})} px={4}>
      <Avatar border={0} boxSize="100px" src={avatar} />
      <Heading size="md">{name}</Heading>
      {role && <Heading size="sm" color="gray.500">{role}</Heading> }
      {desc && <Text fontSize="sm" color="gray.500">{desc}</Text> }
    </Stack>
  </Fade>
)


const TEAM_ASSETS = '../assets/team/'

export const Team = () => {
  return (
    <Box py={40} pt={{ base: 20, md: 40 }} id="team">
      <Container maxW="container.lg" centerContent textAlign="center">
        <Box mb={10}>
          <Heading mb={6} size="lg">Founding Team</Heading>                    
          <Wrap mb={24} px={8} justify="center">
            <Founder 
              avatar={`${TEAM_ASSETS}falco.png`} 
              name="Falco Pangkey" 
              role="CEO"
              href="https://www.linkedin.com/in/falcopangkey/"
              />
            <Founder 
              avatar={`${TEAM_ASSETS}mikey.png`}
              name="Michael Molina" 
              role="CTO"
              href="https://www.linkedin.com/in/drybfounder/"
              />
            <Founder 
              avatar={`${TEAM_ASSETS}erik.png`} 
              name="Erik de Groot" 
              role="COO"
              href="http://www.linkedin.com/in/erikmdegroot"
              />         
            <Founder 
              avatar={`${TEAM_ASSETS}thea.png`} 
              name="Thea WR" 
              role="Operations Lead"
              href="https://www.linkedin.com/in/theawr"
              />                          
            <Founder 
              avatar={`${TEAM_ASSETS}charles.png`} 
              name="Charles Tan" 
              role="CSO"
              href="https://www.linkedin.com/in/charlestmz"
              />     
          </Wrap>
   
        </Box>
      </Container>
    </Box>
  )
}

  // <Heading mb={6} size="lg">Advisors</Heading>          
  // <Wrap spacing={8} justify="center" py={8}>
  //   <Member 
  //     avatar={`${TEAM_ASSETS}hung.png`} 
  //     name="Jason Hung" 
  //     desc="#1 ICO Advisor China Markets"
  //     href="https://tw.linkedin.com/in/jasonhung-earth"
  //     />
  //   <Member 
  //     avatar={`${TEAM_ASSETS}evan.png`}
  //     name="Evan Luthra" 
  //     desc="Forbes 30 under 30, Angel Investor and Advisor to 400+ Web3 Companies over $100B Market Cap, 2.4M+ Followers"
  //     href="https://www.instagram.com/evanluthra"
  //     />
  //   <Member 
  //     avatar={`${TEAM_ASSETS}scarffe.png`}
  //     name="Ian Scarffe" 
  //     desc="#1 Ranked ICO Advisor"
  //     href="https://uk.linkedin.com/in/ianscarffe"
  //     />
  //   <Member 
  //     avatar={`${TEAM_ASSETS}khan.png`} 
  //     name="Hamza Khan" 
  //     desc="Top Ranked ICO Advisor"
  //     href="https://www.linkedin.com/in/hamzaxkh/"
  //     />
  //   <Member 
  //     avatar={`${TEAM_ASSETS}irfan.png`} 
  //     name="Muhammad Irfan" 
  //     desc="Adviced 100+ Blockchain projects"
  //     href="https://www.linkedin.com/in/chmirfan/"
  //     />                            
  // </Wrap>       

// <User avatar={`${TEAM_ASSETS}utsav.png`} name="Utsav Kumar" role="Content Lead" />
// <User avatar={`${TEAM_ASSETS}shafeeq.png`} name="Shafeeq Qureshi" role="Advisor (Middle East)" />
// <User avatar={`${TEAM_ASSETS}jen.png`} name="Jen Buakaew" role="Advisor (Asia)" />

{/* <Member 
avatar={`${TEAM_ASSETS}shubham.png`}
name="Shubham Singh" 
role="QA/Dev Lead"
href="https://www.linkedin.com/in/shubham-singh-3013001a5/"
/>
<Member 
avatar={`${TEAM_ASSETS}john.png`} 
name="John Etetim Udoh" 
role="Community Lead"
href="https://www.linkedin.com/in/john-udoh/"
/> */}


  // <Box py={24}>
  // <Heading mb={6} size="lg">Team Leaders</Heading>          
  // <Stack direction={{ base: 'column', md: 'row' }} align="center" justify="center">
  //   <Member 
  //     avatar={`${TEAM_ASSETS}thea.png`} 
  //     name="Thea WR" 
  //     role="Operations Lead"
  //     href="https://www.linkedin.com/in/theawr"
  //     />
  //   <Member 
  //     avatar={`${TEAM_ASSETS}juan.png`} 
  //     name="Juan Ochoa" 
  //     role="LatAm Lead"
  //     href="https://www.linkedin.com/in/#"
  //     />                
  //   <Member 
  //     avatar={`${TEAM_ASSETS}diegos.png`} 
  //     name="Diego Layola" 
  //     role="LatAm Community Lead"
  //     href="https://www.linkedin.com/in/#"
  //     />
  //   <Member 
  //     avatar={`${TEAM_ASSETS}kangnian.png`} 
  //     name="Kangnian" 
  //     role="China Community Lead"
  //     href="https://www.linkedin.com/in/#"
  //     />                
  // </Stack>
  // </Box>