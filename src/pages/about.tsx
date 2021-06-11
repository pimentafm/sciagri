import { Flex, Fade } from "@chakra-ui/react";
import { Header } from "../components/Header";

import Card from "../components/Card";

export default function About() {
  return (
    <Fade in={true}>
      <Flex direction="column" h="100vh" justifyContent="center">
        <Header />
        <Flex
          direction="column"
          w="100%"
          my="auto"
          maxWidth={1480}
          mx="auto"
          px="6"
          justify="center"
          alignItems="center"
        >
          <Card />
        </Flex>
      </Flex>
    </Fade>
  );
}
