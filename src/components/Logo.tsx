import { Flex, Image, Text } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

export const Logo = () => {
  const { lang } = useTranslation();
  return (
    <Flex direction="row" align="center" justify="center">
      <Image src="/images/logo.svg" h={['6rem', '10rem']} />{' '}
      <Text
        fontSize={['4rem', '8rem']}
        fontWeight="bold"
        color="gray.400"
        fontStyle="italic"
        letterSpacing="tight"
        locale={lang}
      >
        Sciagri
      </Text>
    </Flex>
  );
};
