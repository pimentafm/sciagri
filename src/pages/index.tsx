import { Flex, Text, Heading } from '@chakra-ui/react';

import { motion } from 'framer-motion';

import { Header } from '../components/Header';
import { Logo } from '../components/Logo';

import useTranslation from 'next-translate/useTranslation';

import SmallCentered from '../components/Footer';

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
        textAlign="center"
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
          py={6}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          {t('principal')} <br />
          <Text
            bgGradient="linear(to-l, #2db342, #b3da18)"
            bgClip="text"
            as={'span'}
          >
            {t('secondary')}
          </Text>
        </Heading>
      </MotionFlex>

      <SmallCentered />
    </Flex>
  );
}
