import { Text, Image } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      Sciagri
      <Text as="span" ml="1" color="green.300">
        .
      </Text>
    </Text>
  );
}
