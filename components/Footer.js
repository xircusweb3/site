import { Box, Container, HStack, Spacer, Stack, Button, Text, Link, 
  IconButton, Wrap, Grid, Heading, List, ListItem,
  Image
} from "@chakra-ui/react";
import {
  FaTelegramPlane, FaFacebook, FaTwitter, FaArrowUp,
  FaYoutube, FaGithub, FaInstagram, FaLinkedin
} from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import Script from "next/script";

const socialLinks = [
  {
    key: 'tg',
    icon: <FaTelegramPlane fontSize={24} />,
    url: 'https://t.me/xircusweb3'
  },
  {
    key: 'fb',
    icon: <FaFacebook fontSize={24} />,
    url: 'https://facebook.com/xircusweb3'
  },
  {
    key: 'tw',
    icon: <FaTwitter fontSize={24} />,
    url: 'https://twitter.com/xircusweb3'
  },
  {
    key: 'yt',
    icon: <FaYoutube fontSize={24} />,
    url: 'https://www.youtube.com/channel/UCljy1Y7cl748M2fc2bUiFMg'
  },
  {
    key: 'gt',
    icon: <FaGithub fontSize={24} />,
    url: 'https://github.com/xircusweb3'
  },
  {
    key: 'ig',
    icon: <FaInstagram fontSize={24} />,
    url: 'https://www.instagram.com/xircusweb3'
  },
  {
    key: 'ln',
    icon: <FaLinkedin fontSize={24} />,
    url: 'https://www.linkedin.com/company/xircus-nft'
  }
]

const FooterLink = ({ text, url }) => <Button size="sm" variant="ghost" target="_blank" as="a" href={url}>{text}</Button>
const SocialLink = ({ icon, url }) => <IconButton as="a" size="sm" variant="ghost" target="_blank" icon={icon} href={url} />

const learnLinks = [
  {
    key: 'introduction',
    path: '#intro'
  },
  {
    key: 'solutions',
    path: '#solutions'
  },
  {
    key: 'features',
    path: '#features'
  },
  {
    key: 'blockchains',
    path: '#blockchains'
  },  
  {
    key: 'products',
    path: '#products'
  },
  {
    key: 'roadmap',
    path: '#roadmap'
  },  
  {
    key: 'team',
    path: '#team'
  },
  // {
  //   key: 'xw3',
  //   path: '#get-xw3'
  // },  
  // {
  //   key: 'faq',
  //   path: '#faq'
  // },
]

const buildLinks = [
  {
    key: 'sdks',
    path: 'https://www.npmjs.com/~xircusteam',
    target: '_blank'
  },
  {
    key: 'contracts',
    path: 'https://beta.xircus.app/contracts',
    target: '_blank'
  },
  {
    key: 'graph',
    path: 'https://beta.xircus.app/providers',
    target: '_blank'
  },  
  {
    key: 'skins',
    path: 'https://beta.xircus.app/skins',
    target: '_blank'
  },
  {
    key: 'blocks',
    path: 'https://beta.xircus.app/providers',
    target: '_blank'
  },  
  {
    key: 'storage',
    path: 'https://beta.xircus.app/developers/#ipfs',
    target: '_blank'
  },    
  {
    key: 'aggregator',
    path: '#aggregator'
  },      
  {
    key: 'devref',
    path: 'https://xircus-developer.gitbook.io/',
    target: '_blank'
  },
  {
    key: 'contractref',
    path: 'https://beta.xircus.app/developers#core',
    target: '_blank'
  },  
  // {
  //   key: 'guides',
  //   path: '#guides'
  // },    
]

const exploreLinks = [
  {
    key: 'xw3',
    path: '#xw3'
  },
  {
    key: 'currencies',
    path: 'https://beta.xircus.app/currencies',
    target: '_blank'
  },
  {
    key: 'deploy',
    path: 'https://beta.xircus.app/deployer',
    target: '_blank'
  },  
  {
    key: 'marketplaces',
    path: '#marketplaces'
  },
  {
    key: 'defis',
    path: '#defis'
  },
  {
    key: 'launchpads',
    path: '#launchpads'
  },  
  {
    key: 'predictions',
    path: '#predictions'
  },    
  {
    key: 'daos',
    path: '#daos'
  },
]

const participateLinks = [
  {
    key: 'community',
    path: '#community'
  },
  {
    key: 'contributors',
    path: '#contributors'
  },
  {
    key: 'events',
    path: '#events'
  },
  {
    key: 'hackatons',
    path: 'https://xircus-apr-hackathon-manila.devpost.com/',
    target: '_blank'
  }
]

const resourceLinks = [
  {
    key: 'deck',
    path: 'https://xircus-web3-protocol.gitbook.io/xircus-web3-protocol',
    target: '_blank'
  },  
  {
    key: 'investors',
    path: 'https://forms.gle/J4wM2KoVdUnmnzVk7?utm_source=website-strategic-investors&utm_medium=homepage&utm_campaign=strategic_investors&utm_id=strategic+investors',
    target: '_blank'
  },
  {
    key: 'about',
    path: '#about'
  },
  {
    key: 'blog',
    path: 'https://xircus.medium.com/',
    target: '_blank'
  },
  // {
  //   key: 'gitbook',
  //   path: 'https://xircus-web3-protocol.gitbook.io/xircus-web3-protocol/',
  //   target: '_blank'
  // },
]

const Links = ({ title, links = [], t }) => (
  <Box mb={10}>
    <Heading size="md" mb={4}>{title}</Heading>
    <List spacing={2} fontSize="sm"> 
    {
      links.map(link => <ListItem 
        key={link.key} 
        as={Link} 
        display="block" 
        target={link.target} 
        href={link.path}>
          {t(link.key)}
        </ListItem>
      )
    }
    </List>
  </Box>
)

export const Footer = () => {
  const t = useTranslations('footer')
  return (
    <Box>
      <Container maxW="container.xl" pb={50}>
        <Grid templateColumns={{ base: 'auto', md: 'repeat(5, 1fr)' }} mb={6}>
          <Links title={t('learn')} links={learnLinks} t={t} />
          <Links title={t('build')} links={buildLinks} t={t} />
          <Links title={t('explore')} links={exploreLinks} t={t} />          
          <Links title={t('participate')} links={participateLinks} t={t} />
          <Links title={t('resources')} links={resourceLinks} t={t} />
        </Grid>
        <Stack direction={{ base: 'column', md: 'row' }} mb={6}>
          <Spacer />
          <Image
            onClick={() => logBadgeClick()} 
            id="badge-button" 
            src="https://static.alchemyapi.io/images/marketing/badge.png"
            alt="Alchemy Supercharged" 
            w={192} 
            h={41}
            />          
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }} gap={6} align="center">
          <HStack gap={2} justify="center">
            {
              socialLinks.map((link, linkKey) => <SocialLink {...link} key={linkKey} />)
            }
          </HStack>
          <Spacer />
          <Text fontSize="sm" textAlign={{ base: 'center', sm: 'inherit' }}>{t('name')}</Text>
        </Stack>
      </Container>
    </Box>
  )
}


{/* <IconButton as="a" href="#" icon={<FaArrowUp />} pos="fixed" borderRadius="full" size="lg" bottom={10} right={10} />
<Stack
  maxW="container.xl" mx="auto" px={{ base: 4, sm: 0 }} py={8}
  direction={{ base: 'column', xl: 'row' }} alignItems={{ base: 'center', sm: 'center' }}>
  <Spacer />
  <Spacer />
  <Stack direction={{ base: 'column', md: 'row' }}>
    <FooterLink url="https://xircus.medium.com/" text={t('blog')} />
    <FooterLink url="https://resources.xircus.app/" text={t('resources')} />
    <FooterLink url="https://xircus.app/terms.pdf" text={t('terms')} />
    <FooterLink url="https://xircus.app/privacy.pdf" text={t('privacy')} />
    <FooterLink url="mailto:hello@xircus.app" text={t('contactUs')} />
  </Stack>
</Stack> */}