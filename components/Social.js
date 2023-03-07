import { Box, Button, Container, Grid, Heading, HStack, Image, Text } from "@chakra-ui/react"
import { useTranslations } from "next-intl"
import { GradientHeading } from "./Gradient"
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import YouTube from "react-youtube"
import { useEffect, useState } from "react"
import { TbExternalLink } from 'react-icons/tb'

const MEDIUM_RSS = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@xircus`

const Stat = ({ value, label }) => (
  <Box>
    <Heading>{value}</Heading>
    <Heading size="sm">{label}</Heading>
  </Box>
)

const videoOpts = {
  height: 340,
  width: '100%',
  playerVars: {
    autoplay: 1
  }
}

const Article = ({ title, thumbnail, link, pubDate }) => (
  <Box>
    <Image src={thumbnail} mb={4} />
    <Heading size="md" mb={4}>{title}</Heading>
    <Button as="a" variant="link" href={link} target="_blank" w="full" rightIcon={<TbExternalLink />}>Read More</Button>
  </Box>
)

export const Social = () => {
  const t = useTranslations('social')
  // const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(false)

  useEffect(() => {
    loadMediumArticles()
  }, [])

  const handleOnReady = (event) => {
    event.target.pauseVideo()
  }

  const loadMediumArticles = async() => {
    const reply = await fetch(MEDIUM_RSS)
    const result = await reply.json()
    setArticle(result?.items[0])
    // setArticles(result?.items || [])
  }

  return (
    <Box>
      <Container maxW="container.xl" textAlign="center">
        <Heading>{t('title1')}</Heading>
        <GradientHeading>{t('title2')}</GradientHeading>
        <Grid templateColumns={{ base: 'auto', md: 'repeat(4, 1fr)' }} gap={4} my={12} py={12} bg="#1E1A1D" rounded="lg">
          <Stat value="34k" label={t('followers')} />
          <Stat value="124k" label={t('impressions')} />          
          <Stat value="45k" label={t('likes')} />          
          <Stat value="456k" label={t('members')} />          
        </Grid>
        <Grid templateColumns={{ base: 'auto', md: 'repeat(3, 1fr)' }} gap={6}>
          <Box rounded="lg" overflow="hidden">
            <TwitterTimelineEmbed 
              sourceType="profile"
              screenName="xircusweb3"
              options={{ height: 340 }}
            />
          </Box>
          <Box rounded="lg" overflow="hidden">
            <YouTube
              videoId="isVTDX7cmvM"
              opts={videoOpts}
              onReady={handleOnReady}
            />
          </Box>
          <Box rounded="lg" overflow="hidden">
            <Article {...article} />
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}