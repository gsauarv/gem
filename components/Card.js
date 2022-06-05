import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
function Card({ iconComponent, title, description }) {
  return (
    <>
      <Flex
        flexDirection={"column"}
        gap={"3"}
        shadow={"lg"}
        padding="5"
        borderRadius={"md"}
        _hover={{
          boxShadow: "lg",
          bgColor: "gray.100",
          cursor: "pointer",
        }}
      >
        {/* icon */}
        <IconButton
          icon={iconComponent}
          color={"brand.primary"}
          alignSelf={"flex-start"}
          mt={"3"}
        />

        {/* heading */}
        <Heading
          size={"sm"}
          textTransform={"uppercase"}
          textColor={"brand.secondary"}
        >
          {title}
        </Heading>
        {/* description */}
        <Text color={"gray.500"} fontSize={"xs"} pb={"10"}>
          {description}
        </Text>
      </Flex>
    </>
  );
}

export default Card;
