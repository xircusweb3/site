import { Box, Grid, Heading, Image, VStack } from "@chakra-ui/react"

export const GridItemCenter = ({ image, title, desc }) => (
  <VStack textAlign="center" minW={320} borderWidth={1} p={6} rounded="md" spacing={4} borderColor="rgba(212, 217, 255, 0.20)" bg="rgba(40, 49, 100, 0.10)">
    <Image src={image} boxSize="50px" />
    <Heading size="md">{title}</Heading>
    <Heading size="xs" color="gray.500">{desc}</Heading>
  </VStack>
)

export const GridCarousel = ({ children }) => (
  <Grid
    autoFlow="column" 
    overflowX="auto" 
    sx={{ 
      '&::-webkit-scrollbar': { width: '6px', height: '6px', background: '#181818', borderRadius: '2px' },
      '&::-webkit-scrollbar-thumb': { background: '#718096', borderRadius: '8px' },
    }} scrollSnapType="x mandatory" gap={4} py={4}>
    { children }
  </Grid>  
)