import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

import React from "react";
import InputComponents from "../components/InputComponents";
import SectionTitle from "../components/SectionTitle";
import WrapperContainer from "../components/WrapperContainer";
import { FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import Head from "next/head";
function Contact() {
  return (
    <>
      <Head>
        <title>
          Contact Genius English Medium School | School that ensure better
          future.
        </title>
        <meta
          name="description"
          content="Genius English medium school was established in the year 2056 B.S.
            at Sundarijal, Kathmandu with good computer lab Facility, ECA activities,
            different kinds of competition every week, Sports Week and all other
            facilities that a modern school need for the betterment of its
            Students."
          key="desc"
        />
        <meta
          property="og:title"
          content="Genius English Medium School | School that ensure better future."
        />
        <meta
          property="og:description"
          content="Genius English medium school was established in the year 2056 B.S.
            at Sundarijal, Kathmandu with good computer lab Facility, ECA activities,
            different kinds of competition every week, Sports Week and all other
            facilities that a modern school need for the betterment of its
            Students."
        />
        <meta
          property="og:image"
          content="https://geniusenglishmediumschool/history.jpeg"
        />
        <link rel="icon" href="/logo.jpeg" type="image/icon type" />
      </Head>
      <WrapperContainer>
        <SectionTitle title={"Ask Us Something"} />
        {/* form */}
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          mt="5"
          gridGap={"40"}
          maxW={"full"}
        >
          {/* form input */}
          <Flex flexDirection={"column"} gridGap={"5"}>
            <InputComponents placeHolderInput={"Full Name"} />
            <InputComponents placeHolderInput={"Email Address"} />
            <InputComponents placeHolderInput={"Phone Number"} />
            <InputComponents placeHolderInput={"Subject"} />
            <Textarea placeholder="Message" minH={"40"}></Textarea>
            <Button
              alignSelf={"flex-start"}
              bg={"brand.primary"}
              fontSize={"sm"}
              textColor={"white"}
            >
              Submit
            </Button>
          </Flex>
          {/* conntact info */}
          <Flex flexDirection={"column"}>
            <Flex flexDirection={"row"} alignItems={"center"}>
              <IconButton
                icon={<FaPhoneAlt />}
                alignSelf={"flex-start"}
                bg={"transparent"}
                color={"brand.secondary"}
              />
              <Text>01-4800147,+977-9841495786</Text>
            </Flex>
            <Flex flexDirection={"row"} alignItems={"center"} mt={"5"} mb={"5"}>
              <IconButton
                icon={<FaMailBulk />}
                alignSelf={"flex-start"}
                bg={"transparent"}
                color={"brand.secondary"}
              />
              <Text>geniusschool1000@gmail.com</Text>
            </Flex>
          </Flex>
        </Flex>
      </WrapperContainer>
    </>
  );
}

export default Contact;
