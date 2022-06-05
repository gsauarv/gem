import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import React from "react";
import NavLink from "./NavLink";

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
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
        />
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
    </>
  );
}

export default NavBar;
