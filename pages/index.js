import { Box, Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import WrapperContainer from "../components/WrapperContainer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <Box>
          <img src="./sing.jpg"></img>
          <p className="legend">Legend 1</p>
        </Box>

        <Box>
          <img src="/sing.jpg"></img>
          <p className="legend">Legend 1</p>
        </Box>

        <Box>
          <img src="/sing.jpg"></img>
          <p className="legend">Legend 1</p>
        </Box>
      </Carousel>
      <WrapperContainer>
        {/* Carosoul */}

        <SectionTitle title={"Message from the principal"} />
        {/* message from the principal block */}
        <Flex flexDirection={{ base: "column", md: "row" }}>
          {/* message */}
          <Text
            fontSize={"xs"}
            textColor={"gray.500"}
            mt={{ base: "5", md: "0" }}
          >
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
        {/* 
          why us section goes here 
       */}
        <SectionTitle title={"Why us?"} />
        {/* 
      Card container,there will be the services provided by the school
       */}
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(1, 1fr)"
          gap={4}
          mb={"5"}
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
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(1, 1fr)"
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
        <Button mt={"5"} fontWeight={"bold"} color={"brand.secondary"} mb={"5"}>
          More Notices
        </Button>
      </WrapperContainer>
    </>
  );
}
