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
          href="#cardservices"
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
        id="cardservices"
        h={{
          base: '100%',
          sm: '100%',
          md: '100%',
          lg: '100vh',
          xl: '100vh'
        }}
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
            base: '150px',
            sm: '200px',
            md: '350px',
            lg: '300px',
            xl: '350px'
          }}
          spacingY={10}
          alignContent={'center'}
        >
          <SciagriServices
            icon={TerritorialInteligenceIcon}
            title={t('service_title_territorial')}
            tooltip={t('icon_click')}
            content={t('service_content_territorial')}
            url="#"
          />

          <SciagriServices
            icon={WebGISIcon}
            title={t('service_title_webgis')}
            tooltip={t('icon_click')}
            content={t('service_content_webgis')}
            url="#"
          />

          <SciagriServices
            icon={RemoteSensingIcon}
            title={t('service_title_remotesensing')}
            tooltip={t('icon_click')}
            content={t('service_content_remotesensing')}
            url="#"
          />

          <SciagriServices
            icon={ManagementIcon}
            title={t('service_title_management')}
            tooltip={t('icon_click')}
            content={t('service_content_management')}
            url="#"
          />

          <SciagriServices
            icon={PlanningIcon}
            title={t('service_title_planning')}
            tooltip={t('icon_click')}
            content={t('service_content_planning')}
            url="#"
          />

          <SciagriServices
            icon={WaterIcon}
            title={t('service_title_water')}
            tooltip={t('icon_click')}
            content={t('service_content_water')}
            url="#"
          />

          <SciagriServices
            icon={DataScienceIcon}
            title={t('service_title_datascience')}
            tooltip={t('icon_click')}
            content={t('service_content_datascience')}
            url="#"
          />
        </SimpleGrid>
      </MotionFlex>

      <Footer />
    </Flex>
  );
}
