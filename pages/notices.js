import { Grid } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import NoticeCard from "../components/NoticeCard";
import SectionTitle from "../components/SectionTitle";
import WrapperContainer from "../components/WrapperContainer";

function notices() {
  return (
    <>
      <Head>
        <title>
          Notices For Students Genius English Medium School | School that ensure
          better future.
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
        {/* Section title */}
        <SectionTitle title={"Notices and News"} />
        {/* Grid */}
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
          gap={4}
          mb={"5"}
          mt={"10"}
        >
          <NoticeCard
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of "
            }
            title={"Singing Competition"}
          />

          <NoticeCard
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of "
            }
            title={"Singing Competition"}
          />

          <NoticeCard
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of "
            }
            title={"Singing Competition"}
          />

          <NoticeCard
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of "
            }
            title={"Singing Competition"}
          />

          <NoticeCard
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of "
            }
            title={"Singing Competition"}
          />

          <NoticeCard
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of "
            }
            title={"Singing Competition"}
          />
        </Grid>
      </WrapperContainer>
    </>
  );
}

export default notices;
