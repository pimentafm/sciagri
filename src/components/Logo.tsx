import { Flex, Image, Text } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

export const Logo = () => {
  const { lang } = useTranslation();
  return (
    <Flex direction="row" align="center" justify="center">
      <Image src="/images/logo.svg" h={['4rem', '8rem']} />{' '}
      <Text
        fontSize={['3rem', '6rem']}
        fontWeight="bold"
        color="gray.400"
        fontStyle="italic"
        letterSpacing="tight"
        lang={lang}
      >
        Sciagri
      </Text>
    </Flex>
  );
};
