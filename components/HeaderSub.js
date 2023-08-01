import { Fragment, useState } from 'react'
import {
  Box, Heading, Stack, Container,
  HStack, Image, Spacer, Button, Select, Drawer, DrawerBody,
  DrawerOverlay, DrawerCloseButton, DrawerContent, IconButton,
  useDisclosure,
  Tooltip,
} from '@chakra-ui/react'
import Link from 'next/link'
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import Router, { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { TbArrowNarrowUp, TbArrowUp } from 'react-icons/tb'

{/* <option value="zh">中文</option>
<option value="ru">Russian</option>
<option value="jp">日本</option>
<option value="ko">한글</option>
<option value="es">Español</option>
<option value="pt">Portuguese</option>
<option value="ar">Arabic</option>
<option value="th">Thai</option>
<option value="vi">Tiếng Việt</option>
<option value="tr">Turkish</option> */}

const MobileDrawer = ({ children, isOpen, onClose, ...rest }) => (
  <Drawer isOpen={isOpen} onClose={onClose} {...rest}>
    <DrawerOverlay bg="transparent" />
    <DrawerContent bg="transparent" backdropFilter="blur(20px)">
      <DrawerBody>{children}</DrawerBody>
      <DrawerCloseButton />
    </DrawerContent>
  </Drawer>
)

const HeaderLink = ({ text, href, external, ...rest }) => (
  <Fragment>
    {
      external
      ? <Button size="sm" fontWeight="bold" variant="ghost" as="a" target="_blank" href={href} {...rest}>{text}</Button>
      : <Link href={href}>
          <Button size="sm" fontWeight="bold" variant="ghost" {...rest}>{text}</Button>
        </Link>
    }  
  </Fragment>
)

// const headerLinks = [
//   {
//     key: 'solutions',
//     href: '#solutions'
//   },  
//   {
//     key: 'products',
//     href: '#products'
//   },
//   {
//     key: 'resources',
//     href: '#resources'
//   },
//   {
//     key: 'docs',
//     href: 'https://xircus-developer.gitbook.io/',
//     external: true
//   },
// ]

const headerLinks = [
  {
    key: 'homepage',
    href: '/'
  },  
  {
    key: 'products',
    href: '/'
  },
  {
    key: 'earn',
    href: '/'
  },
  {
    key: 'deck',
    href: 'https://docsend.com/view/bdb8pjmsg2e9hfhm',
    external: true
  },
  {
    key: 'investors',
    href: 'https://forms.gle/J4wM2KoVdUnmnzVk7?utm_source=website-strategic-investors&utm_medium=homepage&utm_campaign=strategic_investors&utm_id=strategic+investors',
    external: true
  },  
]

export const HeaderSub = () => {
  const t = useTranslations('header')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { scrollY } = useScroll()
  const [showUp, setShowUp] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 1000) {
      setShowUp(true)
    } else {
      setShowUp(false)
    }
  })

  return (
    <Fragment>
      <MobileDrawer isOpen={isOpen} onClose={onClose} zIndex="9999999 !important">
      <Stack align="center" justify="center" py={20}>
        <Stack spacing={6} align="stretch" justify="stretch">
          {
            headerLinks.map((link, linkKey) =>
              <HeaderLink key={linkKey} letterSpacing={3} text={t(link.key)} href={link.href} w="full" />
            )
          }
        </Stack>
        <Box pt={6}>
          <ChangeLocale />
        </Box>
      </Stack>
      </MobileDrawer>      
      <Box zIndex={isOpen ? 1 : 9999999} pos="fixed" w="100%" backdropFilter="blur(10px)">
        <Container maxW="container.xl" py={8}>
          <HStack>
            <Link href="/">
              <HStack cursor="pointer" align="center" justify="center">
                <Image src="xircus-logo-trans@2x.svg" alt="Xircus Web3 logo" boxSize="30px" />
                <Heading size="md"  fontWeight={900}>{t('title')}</Heading>
              </HStack>
            </Link>
            <Spacer />
            <HStack spacing={4} mr="40px !important" display={{ base: 'none', md: 'block' }}>
              {
                headerLinks.map((link, linkKey) =>
                  <HeaderLink 
                    key={linkKey} 
                    external={link?.external || false} 
                    text={t(link.key)} 
                    href={link.href}
                    />
                )
              }
            </HStack>
            <Spacer />
            <ChangeLocale display={{ base: 'none', md: 'inline-block' }} />
            <IconButton
              variant="ghost"
              display={{ base: 'inline-block', md: 'none' }}
              icon={isOpen ? <CloseIcon fontSize={24} /> : <HamburgerIcon fontSize={24} />}
              onClick={isOpen ? onClose : onOpen}
              />
          </HStack>
        </Container>
      </Box>
      <Box h="96px" />
      {
        showUp && (
          <Box pos="fixed" bottom={10} right={10}>
            <Tooltip label="Back To Top">
              <IconButton icon={<TbArrowNarrowUp />} as="a" href="#" size="lg" rounded="full" backdropFilter="blur(20px)" />
            </Tooltip>
          </Box>
        )
      }
    </Fragment>
  )
}



