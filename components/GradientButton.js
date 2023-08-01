import { Button } from "@chakra-ui/react";

export const GradientButton = ({ children, ...rest }) => (
  <Button bgGradient="linear(to-r, #FF8D28, #F20074)" {...rest}>
    { children }
  </Button>
)