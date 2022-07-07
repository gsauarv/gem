import { Box, Flex, Image, Text } from "@chakra-ui/react";
import WrapperContainer from "./WrapperContainer";
import Link from "next/link";

function Footer() {
  return (
    <WrapperContainer>
      <Flex justifyContent={"space-between"} padding={5}>
        {/* GEMS Logo */}
        <Box>
          <Image
            src="./logo.jpeg"
            alt="Genius English Medium School "
            maxW={"20"}
            maxH={"14"}
            overflow={"hidden"}
          />{" "}
        </Box>
        {/* NAV LINKS */}
        <Box>
          <Flex justifyContent={"space-between"} gap={2}>
            <Link href="/">
              <Text
                fontSize={"xs"}
                color={"gray.500"}
                _hover={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Home
              </Text>
            </Link>

            <Link href="/about">
              <Text
                fontSize={"xs"}
                color={"gray.500"}
                _hover={{ textDecoration: "underline", cursor: "pointer" }}
              >
                About
              </Text>
            </Link>
            <Link href="/gallery">
              <Text
                fontSize={"xs"}
                color={"gray.500"}
                _hover={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Gallery
              </Text>
            </Link>

            <Link href="/contact">
              <Text
                fontSize={"xs"}
                color={"gray.500"}
                _hover={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Contact
              </Text>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </WrapperContainer>
  );
}

export default Footer;
