import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "../components/SectionTitle";
import WrapperContainer from "../components/WrapperContainer";

function about() {
  return (
    <WrapperContainer>
      {/* about school */}
      <SectionTitle title={"About School"} />

      <Flex flexDirection={{ base: "column", md: "row" }} gap={"10"}>
        <Box
          maxW={{ base: "full", md: "xs" }}
          maxH={{ base: "sm", md: "xs" }}
          borderTopLeftRadius="3xl"
          borderBottomRightRadius={"3xl"}
          overflow={"hidden"}
          mt={"15"}
          shadow={"xl"}
        >
          <Image src="school.jpeg" objectFit={"cover"} alt="Genius School" />
        </Box>

        <Flex flexDirection={"column"}>
          <Text
            fontSize={"xs"}
            textColor={"gray.500"}
            mt={"15"}
            maxW={"container.xl"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Text>
          <Heading textColor={"brand.secondary"} fontSize={"lg"} mt={"10"}>
            Rama Pokhrel
          </Heading>
          <Text fontSize={"xs"} textColor={"brand.primary"}>
            Principal,Genius English Medium School
          </Text>
        </Flex>
      </Flex>

      {/* our history */}
      <SectionTitle title={"Our History"} />
      <Flex flexDirection={{ base: "column", md: "row-reverse" }} gap={"10"}>
        <Box
          maxW={{ base: "full", md: "xs" }}
          maxH={{ base: "sm", md: "xs" }}
          borderTopLeftRadius="3xl"
          borderBottomRightRadius={"3xl"}
          overflow={"hidden"}
          mt={"15"}
          shadow={"xl"}
        >
          <Image src="history.jpeg" />
        </Box>
        <Text fontSize={"xs"} textColor={"gray.500"} mt={"15"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do
        </Text>
      </Flex>

      {/* location */}
      <SectionTitle title={"Location"} />
      {/* location map */}
      <Box mt={"10"} overflow={"hidden"}>
        <iframe
          width="100%"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Gokerneshowr&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </Box>
    </WrapperContainer>
  );
}

export default about;
