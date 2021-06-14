import { Flex, Image, Text } from '@chakra-ui/react';

export const Logo = () => {
  return (
    <Flex direction="row" align="center">
      <Image src="/images/logo.svg" h={['6rem', '10rem']} />{' '}
      <Text
        fontSize={['4rem', '8rem']}
        fontWeight="bold"
        color="gray.400"
        fontStyle="italic"
        letterSpacing="tight"
      >
        Sciagri
      </Text>
    </Flex>
  );
};
