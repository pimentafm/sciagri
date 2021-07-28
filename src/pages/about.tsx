import {
  Flex,
  Stack,
  Button,
  Heading,
  Text,
  Container,
  Box
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

import { Header } from '../components/Header';

import PageSection from '../components/PageSection';
import SocialCard from '../components/SocialCard';

import TextCard from '../components/TextCard';

import useTranslation from 'next-translate/useTranslation';

import {
  socialLinks_fernando,
  socialLinks_igor
} from '../components/SocialCard/data';
import SocialNetworks from '../components/SocialCard/SocialNetworks';

import { Logo } from '../components/Logo';

import Footer from '../components/Footer';

const MotionContainer = motion(Container);

export default function About() {
  const { t } = useTranslation('about');

  return (
    <Flex direction="column" justifyContent="center">
      <Header />

      <Flex
        direction="column"
        w="100%"
        my="auto"
        maxW={1480}
        mx="auto"
        justify="center"
        alignItems="center"
      >
        <MotionContainer
          maxW={'3xl'}
          h="100vh"
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 100
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <Stack
            as={Box}
            justify="center"
            alignItems="center"
            textAlign={'center'}
            py={{ base: 24, sm: 28, md: 32, lg: 36 }}
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
            <Text
              textAlign="justify"
              style={{ textIndent: 50 }}
              color={'gray.500'}
            >
              {t('content1')}
            </Text>
            <Text
              pb={4}
              textAlign="justify"
              style={{ textIndent: 50 }}
              color={'gray.500'}
            >
              {t('content2')}
            </Text>
            <Button
              as="a"
              href="#mvv"
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
          </Stack>
        </MotionContainer>

        <PageSection id="mvv" light="gray.50" dark="gray.900">
          <TextCard title={t('card_mission_title')} content={t('mission')} />
          <TextCard title={t('card_vision_title')} content={t('vision')} />
          <TextCard title={t('card_values_title')} content={t('values')} />
        </PageSection>

        <PageSection>
          <SocialCard
            imagesrc="/images/fernando.jpg"
            name="Fernando Martins Pimenta"
            job={t('job_fernando')}
            content={t('resume_fernando')}
          >
            <SocialNetworks networks={socialLinks_fernando} />
          </SocialCard>
          <SocialCard
            imagesrc="/images/igor.jpg"
            name="Igor Boninsenha"
            job={t('job_igor')}
            content={t('resume_igor')}
          >
            <SocialNetworks networks={socialLinks_igor} />
          </SocialCard>
        </PageSection>
      </Flex>
      <Footer />
    </Flex>
  );
}
