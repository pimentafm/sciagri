import { Flex, Text, Fade, Image } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Fade in={true}>
      <Flex direction="column" h="100vh" justifyContent="center">
        {" "}
        <Header />{" "}
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
          <Image src="/images/logo.svg" boxSize="740px" />

          <Text fontSize="30" fontStyle="italic">
            #Coming soon!
          </Text>
        </Flex>
      </Flex>
    </Fade>
  );
}
