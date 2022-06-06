import { Container } from "@chakra-ui/react";
import React from "react";

function WrapperContainer({ children }) {
  return (
    <Container maxW={{ base: "container.sm", md: "container.lg" }}>
      {children}
    </Container>
  );
}

export default WrapperContainer;
