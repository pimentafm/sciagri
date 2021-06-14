import { Flex, Text, Fade, Heading } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';

import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation('common');
  return (
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
        <Logo />

        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
          color={'green.400'}
          fontStyle="italic"
          align="center"
          justifyContent="center"
        >
          {t('principal')}
          <Text color={'gray.400'}>{t('secondary')}</Text>
        </Heading>
      </Flex>
    </Flex>
  );
}
