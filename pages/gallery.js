import {
  Box,
  Grid,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import WrapperContainer from "../components/WrapperContainer";
import Image from "next/image";
import Head from "next/head";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

function Gallery({ galleries }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imageSrc, setImageSrc] = useState("");
  return (
    <>
      <Head>
        <title>
          Gallery of Genius English Medium School | School that ensure better
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
        <meta
          name="google-site-verification"
          content="jEWPrYapPNLh6abfTTMmAL2O-omWypT2ZvfyXno15mM"
        />
      </Head>
      <WrapperContainer>
        <SectionTitle title={"Gallery"} />
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
          mb={"5"}
          mt={"5"}
        >
          {galleries.map((image, index) => (
            <>
              <Box
                onClick={() => {
                  setImageSrc(image.imageSrc);
                  onOpen();
                }}
              >
                <Image
                  width={"350px"}
                  height={"350px"}
                  src={image.imageSrc}
                  alt={image}
                  layout={"responsive"}
                  objectFit={"cover"}
                  quality={50}
                ></Image>
              </Box>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay>
                  <ModalContent>
                    <Image
                      width={"100%"}
                      height={"100%"}
                      layout={"responsive"}
                      objectFit={"contain"}
                      src={imageSrc}
                      alt={image.name}
                      quality={50}
                    ></Image>
                  </ModalContent>
                </ModalOverlay>
              </Modal>
            </>
          ))}
        </Grid>
      </WrapperContainer>
    </>
  );
}

export default Gallery;

export async function getStaticProps(context) {
  const gallery = await client.fetch(`*[_type == "gallery"]
{
  "imageSrc" : image.asset -> url,
  name
}`);
  console.log(gallery);
  return {
    props: {
      galleries: gallery,
    },
    revalidate: 10,
  };
}
