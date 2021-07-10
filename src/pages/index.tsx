import { Flex, Text, Heading, Button } from '@chakra-ui/react';

import { motion } from 'framer-motion';

import { Header } from '../components/Header';
import { Logo } from '../components/Logo';

import useTranslation from 'next-translate/useTranslation';

import SciagriServices from '../components/SciagriServices';

import Footer from '../components/Footer';

const MotionFlex = motion(Flex);

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <Flex direction="column" justifyContent="center">
      <Header />

      <MotionFlex
        direction="column"
        w="100%"
        h="100vh"
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
          bgGradient="linear(to-l, #2db342, #b3da18)"
          bgClip="text"
        >
          {t('principal')} <br />
        </Heading>

        <Button
          as="a"
          href="#services"
          colorScheme={'green'}
          bg={'green.400'}
          rounded={'full'}
          px={6}
          _hover={{
            bg: 'green.500'
          }}
        >
          Saiba mais
        </Button>
      </MotionFlex>

      <SciagriServices
        id="services"
        title={'WebGIS'}
        subtitle={'Mapas interativos e dashboards'}
        textContent={
          'Snippy is a rich coding snippets app that lets you create your own code snippets, categorize them, and even sync them in the cloud so you can use them anywhere. All that is free!Snippy is a rich coding snippets app that lets you create your own code snippets, categorize them, and even sync them in the cloud so you can use them anywhere. All that is free!Snippy is a rich coding snippets app that lets you create your own code snippets, categorize them, and even sync them in the cloud so you can use them anywhere. All that is free!'
        }
      />

      <Footer />
    </Flex>
  );
}
