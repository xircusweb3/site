import { Heading } from "@chakra-ui/react"

const gradientStyle = {
  bgGradient: 'linear(to-r, #FF8D28, #F20074)',
}

const gradientTextStyle = {
  ...gradientStyle,
  display: 'inline-block',
  bgClip: 'text',
}

export const GradientHeading = props => <Heading {...props} {...gradientTextStyle} />