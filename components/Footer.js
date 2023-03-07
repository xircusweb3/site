import { Box, Container, HStack, Spacer, Stack, Button, Text, Link, IconButton, Wrap, Grid, Heading, List, ListItem } from "@chakra-ui/react";
import {
  FaTelegramPlane, FaFacebook, FaTwitter, FaArrowUp,
  FaYoutube, FaGithub, FaInstagram, FaLinkedin
} from 'react-icons/fa'
import { useTranslations } from 'next-intl'

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
    path: '/intro'
  },
  {
    key: 'features',
    path: '#features'
  },
  {
    key: 'staking',
    path: '#staking'
  },
  {
    key: 'xw3',
    path: '#get-xw3'
  },  
  {
    key: 'faq',
    path: '#faq'
  },
]

const buildLinks = [
  {
    key: 'sdks',
    path: '/intro'
  },
  {
    key: 'contracts',
    path: '#features'
  },
  {
    key: 'graph',
    path: '#features'
  },  
  {
    key: 'skins',
    path: '#staking'
  },
  {
    key: 'blocks',
    path: '#get-xw3'
  },  
  {
    key: 'devref',
    path: '#faq'
  },  
  {
    key: 'guides',
    path: '#faq'
  },    
]

const exploreLinks = [
  {
    key: 'tokens',
    path: '/intro'
  },
  {
    key: 'marketplaces',
    path: '#features'
  },
  {
    key: 'defis',
    path: '#staking'
  },
  {
    key: 'launchpads',
    path: '#get-xw3'
  },  
  {
    key: 'predictions',
    path: '#get-xw3'
  },    
  {
    key: 'daos',
    path: '#faq'
  },
]

const participateLinks = [
  {
    key: 'community',
    path: '/intro'
  },
  {
    key: 'contributors',
    path: '#features'
  },
  {
    key: 'events',
    path: '#staking'
  },
  {
    key: 'hackatons',
    path: '#get-xw3'
  }
]

const resourceLinks = [
  {
    key: 'about',
    path: '/intro'
  },
  {
    key: 'blog',
    path: '#features'
  },
  {
    key: 'pressKit',
    path: '#staking'
  },
]

const Links = ({ title, links = [], t }) => (
  <Box mb={10}>
    <Heading size="md" mb={4}>{title}</Heading>
    <List spacing={2} fontSize="sm"> 
    {
      links.map(link => <ListItem key={link.key} display="block" as={Link} href={link.path}>{t(link.key)}</ListItem>)
    }
    </List>
  </Box>
)

export const Footer = () => {
  const t = useTranslations('footer')
  return (
    <Box>
      <Container maxW="container.xl" pb={100}>
        <Grid templateColumns={{ base: 'auto', md: 'repeat(5, 1fr)' }} mb={24}>
          <Links title={t('learn')} links={learnLinks} t={t} />
          <Links title={t('build')} links={buildLinks} t={t} />
          <Links title={t('explore')} links={exploreLinks} t={t} />          
          <Links title={t('participate')} links={participateLinks} t={t} />
          <Links title={t('resources')} links={resourceLinks} t={t} />
        </Grid>
        <Stack direction={{ base: 'column', md: 'row' }}>
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