import { Flex, Fade } from "@chakra-ui/react";
import { Header } from "../components/Header";

import SocialCard from "../components/SocialCard";

export default function About() {
  return (
    <Fade in={true}>
      <Flex direction="column" h="100vh" justifyContent="center">
        <Header />
        <Flex
          direction="row"
          w="100%"
          my="auto"
          maxWidth={1480}
          mx="auto"
          px="6"
          justify="center"
          alignItems="center"
        >
          <SocialCard />
        </Flex>
      </Flex>
    </Fade>
  );
}
