import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";

import { Logo } from "./Logo";

import { RiMenuLine } from "react-icons/ri";
import { useRef } from "react";

export function Header() {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mt="4"
      mx="auto"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigaation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          mr="2"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
          ref={searchInputRef}
        />
      )}

      <Logo />
    </Flex>
  );
}
