import { Box, Flex, Link, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <>
      <Flex justifyContent={"space-between"} padding={5}>
        {/* GEMS Logo */}
        <Box>
          <Text>LOGO</Text>
        </Box>
        {/* NAV LINKS */}
        <Box>
          <Flex justifyContent={"space-between"} gap={2}>
            <Link>
              <Text fontSize={"xs"} color={"gray.500"}>
                Home
              </Text>
            </Link>

            <Link>
              <Text fontSize={"xs"} color={"gray.500"}>
                About
              </Text>
            </Link>
            <Link>
              <Text fontSize={"xs"} color={"gray.500"}>
                Gallery
              </Text>
            </Link>

            <Link>
              <Text fontSize={"xs"} color={"gray.500"}>
                Contact
              </Text>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default Footer;
