import { Divider, Link, Text } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

function NavLink({ navLink, navHref }) {
  return (
    <>
      <NextLink href={navHref}>
        <a>
          <Text mt={"1.5"} mb={"2"}>
            {navLink}
          </Text>
          <Divider />
        </a>
      </NextLink>
    </>
  );
}

export default NavLink;
