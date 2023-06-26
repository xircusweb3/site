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

const changeLocale = async ({ target: { value } }) => {
  await Router.push('/', '/', { locale: value || 'en' })
  Router.reload()
}

const LOGO_PATH = `M836.150029,589.375743 C834.758106,587.692722 833.367297,586.009701 831.939741,584.362299 C825.679431,577.115958 819.016019,570.23583 811.986253,563.720802 C805.286095,557.535254 799.245151,550.253293 792.068399,544.543043 C786.467302,539.236851 780.901839,533.893927 775.40987,528.513157 L681.755754,436.139561 C681.755754,436.139561 814.951605,304.496585 814.988352,304.533317 C819.894601,299.665691 824.800849,294.834797 829.705984,289.96717 C835.783675,283.965285 842.227719,278.219415 847.572702,271.521837 C852.771811,265.043541 857.129085,257.687002 861.046512,250.368309 C869.100733,235.289018 874.848816,219.03985 878.034648,202.240805 C880.011178,191.737506 881,181.013812 881,170.327963 C881,76.4169412 804.553387,0 710.60641,0 C671.760636,0 633.794557,13.3948114 603.625471,37.6959895 L602.087675,38.9403344 L601.612194,39.4160772 C594.142581,45.6378013 587.223056,52.4817534 580.925998,59.8379584 L440.591254,198.361619 C440.591254,198.361619 299.341182,59.0693564 299.268802,59.0327352 C282.280666,42.2708685 265.694517,27.045983 243.910373,16.6887243 C222.529329,6.51446065 199.097148,0.8051453 175.408853,0.109785963 C173.725184,0.073186932 172.077148,0.0365211139 170.393478,0.0365211139 C76.4463902,0.0365211139 0,76.4534512 0,170.364696 C0,214.354773 16.7316884,256.077446 47.0832832,287.881203 L132.096678,371.580339 C164.975002,403.933972 208.14019,420.109675 251.343239,420.109675 C294.581921,420.109675 337.857349,403.860506 370.735673,371.397789 L493.276079,250.440661 L633.684317,111.844091 L651.405161,94.3132888 C668.393297,81.1013501 688.785519,74.1111354 710.460537,74.1111354 C763.548463,74.1111354 806.713651,117.260481 806.713651,170.327963 C806.713651,190.273768 800.709454,209.267864 789.322414,225.518145 L440.04228,570.637663 L381.609372,513.142231 C309.812894,442.470926 193.056204,442.544392 121.369966,513.361514 L59.2751884,574.663779 L42.9461553,590.803862 L40.8592737,593.035646 C14.4984879,623.77861 0,663.084724 0,703.635293 C0,797.546092 76.4463902,873.963267 170.393478,873.963267 C207.298356,873.963267 242.409323,862.36133 271.955941,840.439757 C271.955941,840.439757 302.490268,810.721966 302.527015,810.758699 L440.189267,674.759013 L598.317235,830.411756 C626.471931,858.115931 667.367729,874 710.497284,874 C804.44426,874 880.88976,797.582825 880.88976,703.672025 C881.036747,660.522346 863.023042,622.094476 836.150029,589.375743 Z M318.819189,318.623054 C281.730578,355.220972 221.394634,355.257705 184.269276,318.733252 L100.537117,236.314192 C83.622252,218.417622 74.2862378,194.994464 74.2862378,170.327963 C74.2862378,117.260481 117.451426,74.1111354 170.539352,74.1111354 C191.995002,74.1111354 212.972945,81.3209665 229.815208,94.459774 L387.943176,250.403928 L318.819189,318.623054 Z M252.953415,755.641982 L226.263022,782.028237 C209.9341,793.666907 190.71332,799.852455 170.539352,799.852455 C117.451426,799.852455 74.2862378,756.702775 74.2862378,703.635293 C74.2862378,681.200576 82.1212027,659.461553 96.3999896,642.297409 L173.65169,566.062784 C216.671005,523.573178 286.71032,523.536445 329.803129,565.953699 L387.503329,622.753437 L252.953415,755.641982 Z M710.643157,799.852455 C687.175343,799.852455 664.658491,791.507475 650.453086,777.563556 L493.019966,622.643239 L629.034182,488.255335 L723.347513,581.251159 C729.132343,586.960296 735.027413,592.560349 740.92137,598.196021 C752.381903,609.102265 763.291235,619.533212 772.847619,630.073243 L772.884365,630.109976 C792.8746,652.178479 806.897385,674.795746 806.897385,703.59856 C806.897385,756.702775 763.731083,799.852455 710.643157,799.852455 Z`

const XircusLogo = ({ size = '50px' }) => (
  <motion.svg
    alt="Xircus Official Logo"
    xmlns="http://www.w3.org/2000/svg"
    className="item"
    width={size}
    viewBox="0 0 1024 1024">
    <motion.path
      d={LOGO_PATH}
      strokeWidth={16}
      fill="transparent"
      stroke="rgba(255, 255, 255, 1)"
      animate={{ pathLength: [0, 1, 0] }}
      transition={{ duration: 5, loop: Infinity }}
    />
  </motion.svg>
)

const ChangeLocale = (props) => (
  <Select
    maxW={120} defaultValue={useRouter().locale}
    borderRadius="full"
    fontWeight="bold"
    size="sm"
    variant="ghost"
    bg="rgba(0,0,0,0.5)"
    _focus={{ boxShadow: 'none' }}
    _hover={{ bgGradient: 'linear(to-l, #8a2387, #e94057, #f27121)' }}
    icon={<ChevronDownIcon />}
    onChange={changeLocale}
    {...props}>
    <option value="en">English</option>
    <option value="zh">中文</option>
    <option value="es">Spanish</option>
    <option value="ru">Russian</option>
  </Select>
)

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
    key: 'features',
    href: '#features'
  },  
  {
    key: 'products',
    href: '#products'
  },
  {
    key: 'earn',
    href: '#earn'
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

export const Header = () => {
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
      <Box zIndex={isOpen ? 1 : 9999999} pos="fixed" w="100%" backdropFilter="blur(20px)">
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



