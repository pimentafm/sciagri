import { Flex, Text, Heading } from '@chakra-ui/react';

import { motion } from 'framer-motion';

import { Header } from '../components/Header';
import { Logo } from '../components/Logo';

import useTranslation from 'next-translate/useTranslation';

const MotionFlex = motion(Flex);

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <Flex direction="column" h="100vh" justifyContent="center">
      <Header />
      <MotionFlex
        direction="column"
        w="100%"
        my="auto"
        maxWidth={1480}
        mx="auto"
        px="6"
        justify="center"
        alignItems="center"
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 100
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
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
      </MotionFlex>
    </Flex>
  );
}
