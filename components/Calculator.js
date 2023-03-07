import { useState, useEffect } from 'react'
import { Box, Container, Divider, Heading, HStack, ListItem, UnorderedList, VStack, Text, Spacer, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Stack } from "@chakra-ui/react";
import { useTranslations } from 'next-intl'
import { ArrowRightIcon } from '@chakra-ui/icons'
import useDebounce from '../hooks/useDebounce'
import { GradientHeading } from './Gradient';

const currency = (value) => new Intl.NumberFormat().format(parseFloat(value))

export const Calculator = () => {
  const t = useTranslations('calculator')
  const [mint, setMint] = useState(1)
  const [values, setValues] = useState({ owner: 450000, provider: 100000, ambassador: 200000, platform: 250000 })
  const bounceMint = useDebounce(mint)

  useEffect(() => {
    setValues({
      owner: (parseInt(bounceMint) * 1000000) * 0.50,
      provider: (parseInt(bounceMint) * 1000000) * 0.20,
      ambassador: (parseInt(bounceMint) * 1000000) * 0.04,
      platform: (parseInt(bounceMint) * 1000000) * 0.25,
    })
  }, [bounceMint])

  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <GradientHeading mb={8}>{t('title')}</GradientHeading>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={12}>
          <Box flex={1} bg="#120F11" borderRadius="xl" p={10}>
            <VStack align="left">
              <Text pb={4}>{t('subtitle')}</Text>
              <Divider />
              <HStack>
                <Heading py={4} size="md">{t('text')}</Heading>
                <Spacer />
                <Heading py={4} size="xl" fontFamily="mono">${mint}</Heading>
              </HStack>

              <Slider defaultValue={mint} min={1} max={100} onChange={setMint}>
                <SliderTrack bg="gray.500">
                  <SliderFilledTrack bgGradient="linear(to-r, #FF8D28, #FA1A85)" />
                </SliderTrack>
                <SliderThumb boxSize={8} bgGradient="linear(to-b, #FF8D28, #FA1A85)">
                </SliderThumb>
              </Slider>
              <HStack pb={8} justify="space-between">
                <Text fontWeight={700}>$1</Text>
                <Text fontWeight={700}>$100</Text>
              </HStack>
              <Stack direction={{ base: 'column', md: 'row' }} justify="space-between" spacing={8}>
                <Box>
                  <Text fontSize="sm" fontWeight={700}>{currency(values.owner)} USDC</Text>
                  <Text color="gray.500">{t('marketplace')}</Text>
                </Box>
                <Box>
                  <Text fontSize="sm" fontWeight={700}>{currency(values.provider)} USDC</Text>
                  <Text color="gray.500">{t('provider')}</Text>
                </Box>
                <Box>
                  <Text fontSize="sm" fontWeight={700}>{currency(values.ambassador)} USDC</Text>
                  <Text color="gray.500">{t('ambassador')}</Text>
                </Box>
                <Box>
                  <Text  fontSize="sm" fontWeight={700}>{currency(values.platform)} USDC</Text>
                  <Text color="gray.500">{t('platform')}</Text>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
