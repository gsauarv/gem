import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import React from "react";
import NavLink from "./NavLink";
import WrapperContainer from "./WrapperContainer";
import Link from "next/link";

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <WrapperContainer>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        height={"14"}
      >
        <Link href={"/"}>
          <Image
            src="./logo.jpeg"
            alt="Genius English Medium School "
            maxW={"20"}
            maxH={"14"}
            overflow={"hidden"}
            cursor={"pointer"}
          />
        </Link>
        <Box
          textAlign={"center"}
          ref={btnRef}
          onClick={onOpen}
          _hover={{ backgroundColor: "gray.200" }}
          padding={"2"}
          rounded={"3"}
          cursor={"pointer"}
          display={{ base: "block", md: "none" }}
        >
          <AiOutlineMenu size={"18"} />
          {/* <IconButton
            ref={btnRef}
            onClick={onOpen}
            margin={"0"}
            icon={<AiOutlineMenu size={"18"} />}
            bg={"white"}
            justifyItems={"center"}
            display={{ base: "block", md: "none" }}
          /> */}
        </Box>

        {/* nav links for md screens */}
        <Box display={{ base: "none", md: "block" }}>
          <Flex gap={"5"}>
            <NavLink navHref={"/"} navLink={"Home"} />
            <NavLink navHref={"/about"} navLink={"About"} />
            <NavLink navHref={"/notices"} navLink={"Notices"} />
            <NavLink navHref={"/gallery"} navLink={"Gallery"} />
            <NavLink navHref={"/contact"} navLink={"Contact"} />
          </Flex>
        </Box>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody pb={"5"} onClick={onClose}>
            <NavLink navLink={"Home"} navHref={"/"} />
            <NavLink navLink={"About"} navHref={"/about"} />
            <NavLink navLink={"Gallery"} navHref={"/gallery"} />
            <NavLink navLink={"Notices"} navHref={"/notices"} />
            <NavLink navLink={"Contact"} navHref={"/contact"} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </WrapperContainer>
  );
}

export default NavBar;
