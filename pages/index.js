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
  FaBus,
  FaCar,
  FaChalkboardTeacher,
  FaFlask,
  FaHome,
  FaPizzaSlice,
  FaShieldAlt,
} from "react-icons/fa";

import NoticeCard from "../components/NoticeCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Genius English Medium School | School that ensure better future.
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
              Education in the post-covid era is going to be different from the
              education in pre-covid times. We have seen a lot of changes in the
              field of education in the last couple of years. The panamic made
              of heavenly reliant on technology and digital platform.
              Educational institute were compelled to conduct online classes for
              the students. Initially students, teachers and the school
              administration faced a lot of difficulties in adapting to this
              change. There is no doubt that online classes can never be
              complete substitute to offline classes. Theirfore, we have already
              switched over to offline classes. We can always go back to online
              classes as and when required.The pandemic has taught us a lesson.
              We have learnt to use technology to achieve our educational goals.
              I am sure we will continue to you technology in the future as
              well. Genius is a smart school in which students and member of the
              staff are encourage to work smart and sincere. It wants its
              students to become efficient and effective members of the society.
              The school provides an environment which is favourable for
              students to study and the staff to work. Discipline is one of the
              pillars of educational at genius. the school those not
              discriminate between slow learners and fast learners. Slow
              Learners are mentored by competent and dedicated teachers to
              improve their performance. Tutorial classes are offered to
              students as an when required. students are judge not only on the
              basis of their performance in the test and examination but also on
              their personalities, their values and your attitude towards life.
              The genius administration has a single-point agenda. It tries its
              level best to provide students with all the supports it can.
              Despite financial constraints, it tries to give the students as
              many facilities as possible. the school is like a garden in which
              students are like plants. My role in the school is that of a
              gardener. I lead a team of competent and dedicated people who are
              prepared the ground on which our students, who are like plants,
              can blossom into beautiful flowers. Genius is well-knit family.
              students, teachers and members of the non-teaching staff are
              integral parts of this family. The success or failure of genius is
              share by all the members of this extended family. Genius extents
              it&apos;s ARM to all students who wish to be part of the family.
              You will know the difference only when you join us.
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

        {/* chairman  */}
        <SectionTitle title={"Message from Our Chairman"} />
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
              Message from the chairman I believe that education is the process
              of acquiring new skills, values and morals to become successful in
              life .education is not about loading student&apos;s mind with
              information but about making it capable of preparing students for
              life.At genius we try to provide value-oriented learning
              opportunity that cultivate the mind enrich the lives of our
              students and prepare them to meet the challenge of life .we go
              beyond the curriculum to sow the speed of social commitment among
              students. Students of today need innovative, vocational,
              agricultural, technical and social education to discover their
              true potential. Education is not filling the mind&apos;s of the
              student with the abundance of information. it is the manifestation
              of the innate qualities of students and channelizing them in the
              right direction so that they can achieve their goals. Genius has
              adopted a flexible and modern teaching methodology to the lights
              the mind of its student. Welcome to genius and feel the
              difference.
            </Text>

            {/* princiapl name and degination container */}

            <Box mt={"5"} mb={"5"}>
              {/* principal name */}
              <Heading fontSize={"lg"} textColor={"brand.secondary"}>
                Ram Krishna karki
              </Heading>
              {/* degignation */}
              <Text fontSize={"xs"} textColor={"gray.600"}>
                Chairman,Genius English Medium School
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
            iconComponent={<FaBook />}
            title={"Library"}
            description={
              "And effective school library students learning outcomes by providing  a range of programs, services and resources which supports teaching and learning .it also supports and encourages students reading experience. the genius library as a good collection of books covering a wide range of subjects and topic that cater to the academic and intellectual needs of students. It has wide collection of different kinds of books according to students interest interest in dream library separately."
            }
          />

          <Card
            iconComponent={<FaFlask />}
            title={"Laboratories"}
            description={
              "The school has separate laboratories for physics, chemistry, biology, computer and cooking. All the labs are well equipped. They are spacious and well-ventilated and possess all the gadgets and equipment necessary to perform practical work prescribed by the board. Students are under the constant guidance of teacher when they are inside the labs."
            }
          />

          <Card
            iconComponent={<FaBus />}
            title={"Transportation"}
            description={
              "Genius has a fleet of school buses which maybe utilize by student for commuting to and from school. the buses have their fixed routes and do not go into Narrow roads. Students are required to board school buses at designated bus stop on the main road. The school authorities do not accept responsibility for the safety of students before the buses peak them up or after they drop them. the school cannot be held responsible for any unforeseen accidents in route. At genius there is transport manager who supervise the entire school transport system. "
            }
          />

          <Card
            iconComponent={<FaPizzaSlice />}
            title={"Cafeteria / Canteen"}
            description={
              "The food served in the genius cafeteria is hygienic and nutritious. The menu is changed at regular intervals. The cafeteria supervisor ensure that all food safety protocols are followed within the cafeteria. What makes the cafeteria popular among student is the price of food available in the cafeteria. The cafeteria serves delicious food at very reasonable rates. It is extremely pocket-friendly. "
            }
          />

          <Card
            iconComponent={<FaHome />}
            title={"Hostels"}
            description={
              "Genius has separate hostels. The hostel has spacious and well-ventilated rooms. Beside living room, there is a recreation room,a dining room and an infirmary. Genius hostel has a supervisor to take care of the needs of students. The residential students find the hostel environment to be extremely friendly. Genius hostel is like home always from home. Genius hostel has a tie-up with local clinic and medicals to deal with medical emergency. "
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
