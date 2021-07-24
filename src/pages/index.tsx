import { Flex, SimpleGrid, Heading, Button } from '@chakra-ui/react';

import {
  TerritorialInteligenceIcon,
  WebGISIcon,
  RemoteSensingIcon,
  ManagementIcon,
  PlanningIcon,
  WaterIcon,
  DataScienceIcon
} from '../components/SVGIcons';

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
          {t('label_ourservices')}
        </Button>
      </MotionFlex>

      <MotionFlex
        id="tools"
        h={['100vh', '100vh', '100vh', '100vh']}
        p={6}
        justify="center"
        textAlign="center"
        alignItems="center"
        transition={{
          type: 'expand',
          damping: 20,
          stiffness: 100
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <SimpleGrid
          id="services"
          flex="1"
          gap="4"
          minChildWidth={{
            base: '100px',
            sm: '100px',
            md: '320px',
            lg: '320px'
          }}
          spacingY={10}
          align="flex-start"
        >
          <SciagriServices
            icon={TerritorialInteligenceIcon}
            title="Sistemas de Inteligência Territorial"
            tooltip="Saiba mais clicando neste ícone"
            content="Ferramentas de inteligência e monitoramento geográfico, Sistemas de análise de dados, Servidores de mapas e WebGIS, Banco de dados geográficos"
            url="#"
          />

          <SciagriServices
            icon={WebGISIcon}
            title="Servidores de Mapas e WebGIS"
            tooltip="Saiba mais clicando neste ícone"
            content="Sistemas servidores de mapas, Plataformas WebGIS, Bancos de dados geográficos"
            url="#"
          />

          <SciagriServices
            icon={RemoteSensingIcon}
            title="Sensoriamento Remoto"
            tooltip="Saiba mais clicando neste ícone"
            content="Classificação de cobertura e uso do solo, Monitoramento, Definição de zonas para manejo agrícola, agricultura de precisão"
            url="#"
          />

          <SciagriServices
            icon={ManagementIcon}
            title="Gestão agrícola"
            tooltip="Saiba mais clicando neste ícone"
            content="Software e algoritmos especializados, Planejamento empresarial, otimização de recursos"
            url="#"
          />

          <SciagriServices
            icon={PlanningIcon}
            title="Planejamento de safras"
            tooltip="Saiba mais clicando neste ícone"
            content="Gestão de projetos agrícolas, estimativa de safras, preços agrícolas"
            url="#"
          />

          <SciagriServices
            icon={WaterIcon}
            title="Recursos hídricos"
            tooltip="Saiba mais clicando neste ícone"
            content="Análise de demanda de recursos hídricos, planejamento empresarial, otimização de recursos"
            url="#"
          />

          <SciagriServices
            icon={DataScienceIcon}
            title="Ciência de dados e Big Data"
            tooltip="Saiba mais clicando neste ícone"
            content="Software e algoritmos especializados, dashboads, análises de safra, análises de mercado"
            url="#"
          />
        </SimpleGrid>
      </MotionFlex>

      <Footer />
    </Flex>
  );
}
