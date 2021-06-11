import { Flex, Fade } from "@chakra-ui/react";
import { Header } from "../components/Header";

import Hero from "../components/Hero";

import SocialCard from "../components/SocialCard";

export default function About() {
  return (
    <Fade in={true}>
      <Flex direction="column" justifyContent="center">
        <Header />

        <Flex
          direction="column"
          w="100%"
          my="auto"
          maxWidth={1480}
          mx="auto"
          justify="center"
          alignItems="center"
        >
          <Hero />
          <SocialCard />
        </Flex>
      </Flex>
    </Fade>
  );
}
