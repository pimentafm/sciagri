import { Flex, Text, Fade } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';

import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation('common');
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
          <Logo />

          <Text fontSize="30" fontStyle="italic">
            {t('teste')}
          </Text>
        </Flex>
      </Flex>
    </Fade>
  );
}
