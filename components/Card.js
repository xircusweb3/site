import { Box } from "@chakra-ui/react";

export const Card = ({ children, ...rest }) => (
  <Box borderWidth={1} bg="rgba(40, 49, 100, 0.10)" borderColor="rgba(212, 217, 255, 0.20)" p={6} rounded="md" {...rest}>
    { children }
  </Box>
)