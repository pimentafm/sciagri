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
          <Hero />
          <PageSection>
            <TextCard title={t('card_mission_title')} content={t('mission')} />
            <TextCard title={t('card_vision_title')} content={t('vision')} />
            <TextCard title={t('card_values_title')} content={t('values')} />
          </PageSection>

          <PageSection>
            <SocialCard
              imagesrc="/images/fernando.jpg"
              name="Fernando Martins Pimenta"
              job="Engenheiro Agrimensor e Cartógrafo, Engenheiro de Biossitemas"
              content={`Fernando Martins Pimenta é pesquisador associado ao Grupo de Pesquisa em
              Interação Atmosfera Biosfera - UFV. Suas áreas de atuação envolvem
              geoprocessamento, sensoriamento remoto, computação paralela e de alta
              performance e automação de análises geoespaciais. Possui formação em
              Engenharia de Agrimensura e Cartografia pela Universidade Federal de
              Viçosa (UFV), MG, Brasil e Engenharia de Biossistemas pela Universidade
              Federal de São João del-Rei (UFSJ), MG, Brasil. Atualmente é estudante
              de pós-graduação no MBA em Data Science & Analysis na Escola Superior de
              Agricultura Luiz de Queiroz na Universidade de São Paulo (USP/ESALQ),
              São Paulo, Brazil.`}
            >
              <SocialNetworks networks={socialLinks_fernando} />
            </SocialCard>
            <SocialCard
              imagesrc="/images/igor.jpg"
              name="Igor Boninsenha"
              job="Mestre em Engenharia Agrícola, Engenheiro Agrônomo"
              content={`Igor Boninsenha Possui graduação em Agronomia pela Universidade
              Federal de Viçosa (2019) e mestrado em Engenharia Agrícola pela
              Universidade Federal de Viçosa (2021). Tem experiência na área de
              Engenharia Agrícola, com ênfase em Manejo de Irrigação, atuando
              principalmente nos seguintes temas: subsídio agrícola,
              desenvolvimento agrícola, water security, políticas públicas e
              conflitos de outorga de água.`}
            >
              <SocialNetworks networks={socialLinks_igor} />
            </SocialCard>
          </PageSection>
        </Flex>
      </Flex>
    </Fade>
  );
}
