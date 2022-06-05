import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function SectionTitle({ title }) {
  return (
    <>
      <Text
        textColor={"brand.primary"}
        textTransform={"uppercase"}
        fontWeight={"bold"}
        fontSize={"md"}
        letterSpacing={"wide"}
        _after={{
          content: `" "`,
          display: "block",
          bgColor: "brand.secondary",
          height: "6px",
          width: "100px",
          mt: "4px",
          borderRadius: "25px 0 25px 0px",
        }}
        mt={"16"}
      >
        {title}
      </Text>
    </>
  );
}

export default SectionTitle;
