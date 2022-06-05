import {
  Box,
  Grid,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import WrapperContainer from "../components/WrapperContainer";

const images = [
  {
    src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    src: "https://images.unsplash.com/photo-1654361812787-c94d96427dea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1654361812787-c94d96427dea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
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
              <Image src={image.src} alt={image}></Image>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay>
                <ModalContent>
                  <Image src={imageSrc} alt={imageSrc}></Image>
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
