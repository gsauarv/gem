import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import React from "react";
import NavLink from "./NavLink";
import WrapperContainer from "./WrapperContainer";

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
        <Text>GEMS</Text>
        <IconButton
          ref={btnRef}
          onClick={onOpen}
          icon={<FaBars />}
          bg={"white"}
          display={{ base: "block", md: "none" }}
        />

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
