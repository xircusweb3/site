import {
  Box, Heading, Text, Grid, HStack, Stack,
  Container, Image, Avatar, Center, Button
 } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { Slide } from 'react-awesome-reveal'
import { TbExternalLink } from 'react-icons/tb'
import { GradientHeading } from './Gradient'

export const ContractAI = () => {
  const t = useTranslations('ai')
  return (
    <Box id="ai">
      <Container maxW="container.lg" py={24}>
        <Center mb={6}>
          <Stack direction={{ base: 'column', md: 'row' }} alignItems="center">
            <GradientHeading>{t('heading')}</GradientHeading>
            <Image src="magic-hat.gif" maxW={50} />
          </Stack>
        </Center>
        <Stack direction={{ base: 'column', md: 'row' }} gap={8} align="center">
          <Image src="chatgpt-smart-contract.gif" maxW={500} />
          <Box>
            <GradientHeading size="lg" mb={6}>{t('title')}</GradientHeading>
            <Box mb={6}>{t('content')}</Box>
            <Button size="lg" as="a" href="https://beta.xircus.app/contracts/ai" target="_blank" rightIcon={<TbExternalLink />}>{t('button')}</Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
