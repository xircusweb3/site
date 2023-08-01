import { Heading, keyframes } from "@chakra-ui/react"

export const gradient = keyframes({
  '0%': { backgroundPosition: '0% 50%' },
  '50%': { backgroundPosition: '100% 50%' },
  '100%': { backgroundPosition: '0% 50%' }
})

// #FF8D28, #F20074

export const GradientHeading = props => 
  <Heading 
    display="inline-block"
    bgGradient={`linear(45deg, darkorchid, #e94057, #FF8D28, #F20074)`}
    bgSize="180%"
    animation={`${gradient} 5s infinite linear`}
    bgClip="text"
    {...props}
    />