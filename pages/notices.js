import { Grid } from "@chakra-ui/react";
import React from "react";
import NoticeCard from "../components/NoticeCard";
import SectionTitle from "../components/SectionTitle";
import WrapperContainer from "../components/WrapperContainer";

function notices() {
  return (
    <WrapperContainer>
      {/* Section title */}
      <SectionTitle title={"Notices and News"} />
      {/* Grid */}
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
        gap={4}
        mb={"5"}
        mt={"10"}
      >
        <NoticeCard
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of "
          }
          title={"Singing Competition"}
        />

        <NoticeCard
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of "
          }
          title={"Singing Competition"}
        />

        <NoticeCard
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of "
          }
          title={"Singing Competition"}
        />

        <NoticeCard
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of "
          }
          title={"Singing Competition"}
        />

        <NoticeCard
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of "
          }
          title={"Singing Competition"}
        />

        <NoticeCard
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of "
          }
          title={"Singing Competition"}
        />
      </Grid>
    </WrapperContainer>
  );
}

export default notices;
