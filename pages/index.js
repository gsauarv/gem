import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import Head from "next/head";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import WrapperContainer from "../components/WrapperContainer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import NextLink from "next/link";
import {
  FaBed,
  FaBook,
  FaCar,
  FaChalkboardTeacher,
  FaShieldAlt,
} from "react-icons/fa";

import NoticeCard from "../components/NoticeCard";

export default function Home() {
  return (
    <>
      <Box>
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
          <Flex maxHeight={"lg"}>
            <Image src="/1.jpeg" alt="School" objectFit={"cover"}></Image>
            <div className="legend test">
              <h1>Admission Open for 2021-2022</h1>
            </div>
          </Flex>

          <Flex maxHeight={"lg"}>
            <Image src="/2.jpeg" alt="School" objectFit={"cover"}></Image>
            <div className="legend test">
              <h1>Admission Open for 2021-2022</h1>
            </div>
          </Flex>

          <Flex maxHeight={"lg"}>
            <Image src="/3.jpeg" alt="School" objectFit={"cover"}></Image>
            <div className="legend test">
              <h1>Admission Open for 2021-2022</h1>
            </div>
          </Flex>

          <Flex maxHeight={"lg"}>
            <Image src="/4.jpeg" alt="School" objectFit={"cover"}></Image>
            <div className="legend test">
              <h1>Admission Open for 2021-2022</h1>
            </div>
          </Flex>
        </Carousel>
      </Box>
      <WrapperContainer>
        {/* Carosoul */}

        <SectionTitle title={"Message from the principal"} />
        {/* message from the principal block */}
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
            <Image src="mam2.jpeg" objectFit={"cover"} />
          </Box>
          {/* message */}
          <Flex flexDirection={"column"}>
            <Text
              fontSize={"xs"}
              textColor={"gray.500"}
              mt="15"
              maxW={"container.xl"}
            >
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </Text>

            {/* princiapl name and degination container */}

            <Box mt={"5"} mb={"5"}>
              {/* principal name */}
              <Heading fontSize={"lg"} textColor={"brand.secondary"}>
                Rama Pokhrel
              </Heading>
              {/* degignation */}
              <Text fontSize={"xs"} textColor={"gray.600"}>
                Principal,Genius English Medium School
              </Text>
            </Box>
          </Flex>
        </Flex>
        {/* 
          why us section goes here 
       */}
        <SectionTitle title={"Why us?"} />
        {/* 
      Card container,there will be the services provided by the school
       */}
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
          gap={4}
          mb={"5"}
          mt={"10"}
        >
          {/* transport */}
          <Card
            iconComponent={<FaCar />}
            title={"Transportation Facility"}
            description={
              "Are you looking for quality education with modest investment "
            }
          />

          <Card
            iconComponent={<FaBook />}
            title={"Extraordinanry Education"}
            description={
              "Are you looking for quality education with modest investment "
            }
          />

          <Card
            iconComponent={<FaChalkboardTeacher />}
            title={"Trained Teachers"}
            description={
              "Are you looking for quality education with modest investment "
            }
          />

          <Card
            iconComponent={<FaBed />}
            title={"Clean Hostel Facility"}
            description={
              "Are you looking for quality education with modest investment "
            }
          />

          <Card
            iconComponent={<FaShieldAlt />}
            title={"Security"}
            description={
              "Are you looking for quality education with modest investment "
            }
          />
        </Grid>
        {/* Notice and events */}
        <SectionTitle title={"Notice and Events"} />
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
          gap={4}
        >
          <NoticeCard
            title={"Singing Competition"}
            description={
              "AAre you looking for quality education with modest investment "
            }
          />

          <NoticeCard
            title={"Dancing Competition"}
            description={
              "AAre you looking for quality education with modest investment "
            }
          />

          <NoticeCard
            title={"Singing Competition"}
            description={
              "AAre you looking for quality education with modest investment "
            }
          />

          <NoticeCard
            title={"Singing Competition"}
            description={
              "AAre you looking for quality education with modest investment "
            }
          />
        </Grid>
        {/* more notices */}
        <NextLink href="/notices">
          <Button
            mt={"5"}
            fontWeight={"bold"}
            color={"brand.secondary"}
            mb={"5"}
          >
            More Notices
          </Button>
        </NextLink>
      </WrapperContainer>
    </>
  );
}
