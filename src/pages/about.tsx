import { Flex, Fade } from '@chakra-ui/react';

import { Header } from '../components/Header';

import Hero from '../components/Hero';

import PageSection from '../components/PageSection';
import SocialCard from '../components/SocialCard';

import TextCard from '../components/TextCard';

import useTranslation from 'next-translate/useTranslation';

import {
  socialLinks_fernando,
  socialLinks_igor
} from '../components/SocialCard/data';
import SocialNetworks from '../components/SocialCard/SocialNetworks';

import Footer from '../components/Footer';

export default function About() {
  const { t } = useTranslation('about');

  return (
    <Fade in={true}>
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
          <Hero
            principal={t('principal')}
            secondary={t('secondary')}
            content1={t('content1')}
            content2={t('content2')}
          />
          <PageSection
            rgbLight="rgba(236, 239, 244, 0.5)"
            rgbDark="rgba(76, 86, 106, 0.1)"
          >
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
      </Flex>

      <Footer />
    </Fade>
  );
}
