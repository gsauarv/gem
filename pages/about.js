import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "../components/SectionTitle";
import WrapperContainer from "../components/WrapperContainer";

function about() {
  return (
    <WrapperContainer>
      {/* about school */}
      <SectionTitle title={"About School"} />
      <Text fontSize={"xs"} textColor={"gray.500"} mt={"10"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do
      </Text>

      <Heading textColor={"brand.secondary"} fontSize={"lg"} mt={"10"}>
        Rama Pokhrel
      </Heading>
      <Text fontSize={"xs"} textColor={"brand.primary"}>
        Principal,Genius English Medium School
      </Text>

      {/* our history */}
      <SectionTitle title={"Our History"} />

      <Text fontSize={"xs"} textColor={"gray.500"} mt={"10"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do
      </Text>

      {/* location */}
      <SectionTitle title={"Location"} />
      {/* location map */}
      <Box mt={"10"} overflow={"hidden"}>
        <iframe
          width="600"
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
