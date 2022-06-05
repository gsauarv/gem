import { Input } from "@chakra-ui/react";
import React from "react";

function InputComponents({ placeHolderInput }) {
  return (
    <>
      <Input maxW={"full"} placeholder={placeHolderInput} />
    </>
  );
}

export default InputComponents;
