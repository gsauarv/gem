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

const images = [
  {
    src: "/gall1.JPG",
  },
  {
    src: "/gall2.JPG",
  },
  {
    src: "/gall3.JPG",
  },

  {
    src: "/gall4.JPG",
  },
  {
    src: "/gall9.JPG",
  },

  {
    src: "/gall8.JPG",
  },

  {
    src: "/gall11.JPG",
  },

  {
    src: "/10.JPG",
  },
];

function Gallery() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imageSrc, setImageSrc] = useState("");
  return (
    <WrapperContainer>
      <SectionTitle title={"Gallery"} />
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
        mb={"5"}
        mt={"5"}
      >
        {images.map((image, index) => (
          <>
            <Box
              onClick={() => {
                setImageSrc(image.src);
                onOpen();
              }}
            >
              <Image
                width={"350px"}
                height={"350px"}
                src={image.src}
                alt={image}
                layout={"responsive"}
                objectFit={"cover"}
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
                    alt={imageSrc}
                  ></Image>
                </ModalContent>
              </ModalOverlay>
            </Modal>
          </>
        ))}
      </Grid>
    </WrapperContainer>
  );
}

export default Gallery;
