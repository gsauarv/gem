import { Grid } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import NoticeCard from "../components/NoticeCard";
import SectionTitle from "../components/SectionTitle";
import WrapperContainer from "../components/WrapperContainer";
import client from "../client";
function notices({ notices }) {
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
        <meta
          name="google-site-verification"
          content="jEWPrYapPNLh6abfTTMmAL2O-omWypT2ZvfyXno15mM"
        />
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
          {notices.map((notice) => (
            <NoticeCard
              title={notice.title}
              description={notice.description}
              key={notice.id}
            />
          ))}
        </Grid>
      </WrapperContainer>
    </>
  );
}

export default notices;

export async function getStaticProps(context) {
  const notices = await client.fetch(`*[_type == "notices"]
{
  title,
  eventDate,
  description,
  "id": _id
}`);
  console.log(notices);
  return {
    props: {
      notices: notices,
    },
    revalidate: 10,
  };
}
