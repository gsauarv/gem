import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import SectionTitle from "../components/SectionTitle";
import WrapperContainer from "../components/WrapperContainer";

function about() {
  return (
    <>
      <Head>
        <title>
          About Genius English Medium School | School that ensure better future.
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
              Genius English medium school was established in the year 2056 B.S.
              at Sundarijal, Kathmandu. Since that Time this school has grown a
              lot in its overall sectors. At the Begining phase of this school,
              the school had to go through a lot of problems. There were so few
              students and students and also it was the first Boarding English
              Medium School in Sundarijal. So it was a challenge for our School
              to get more students at that time. As well as the people status
              were very low at that time so the parents preferred to send their
              children to Government School. But our vision was to give quality
              education to the students at very affordable price and it was out
              vision that got us here now. Now we have more than 500 students in
              our school with good computer lab Facility, ECA activities,
              different kinds of competition every week, Sports Week and all
              other facilities that a modern school need for the betterment of
              its Students.
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
        <SectionTitle title={"Why Choose Us ?"} />
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
            The majority of a child&paos;s productive life, in our opinion, is
            spent in school. They are eager to explore new territories and delve
            into the depths of knowledge at this point since they are interested
            and inquisitive. They undergo a significant transition in terms of
            emotional attachment, physical development, and social well-being
            throughout this time. Children at this age have a tremendous amount
            of energy and curiosity, which needs to be properly channeled and
            handled in a constructive way.
            <br />
            <br />
            Children are assisted in identifying, realizing, and applying their
            intrinsic strengths in everyday learning and extracurricular
            activities by our School committed mentors progressive and
            well-balanced pedagogy. In all areas of growth, we promote
            higher-order thinking and performance and we take care of every
            little thing to keep an eye on the development of the kids. Genius
            employs all available tools to engage and train kids to become
            self-assured and independent, from straightforward presentations to
            intricate critical thinking. Therefore it creates efficient systems,
            offers suitable counsel, promotes plans, and oversees
            implementations and assessments. Through rules pertaining to
            classroom decorum, behavioral etiquette, maintaining property, and
            respecting everyone, children are made aware of their specific roles
            as well as their general responsibilities in this environment. This
            aids in progressively instilling values like empathy, ethics, a
            sense of ownership, and compassion in the developing minds of the
            kids.
            <br />
            <br />
            We raise your children to be compassionate people who can contribute
            significantly and favorably to the growth of the country. For all
            activities to run smoothly and effectively throughout the year,
            discipline, appearance, and language policy collectively function as
            one unit. Every employee at Genius English School works assiduously
            to fulfill their roles in attaining the company&apos;s mission. We
            respect the hopes and aspirations you share for your child.
            Therefore, we share your hopes when you choose Genius English School
            for your child&apos;s education. We appreciate your selection and
            are aware of your expectations. As always, your pleasure is our
            first priority.
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
    </>
  );
}

export default about;
