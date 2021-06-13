import React, { useState, useEffect, useCallback } from 'react';

import {
  Box,
  Text,
  Flex,
  Container,
  Stack,
  useDisclosure,
  IconButton,
  useColorModeValue,
  Icon,
  useColorMode,
  Heading
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { IoMoon, IoSunny } from 'react-icons/io5';
import Link from 'next/link';

import { LogoIcon } from '../../components/LogoIcon';
import { MobileNav } from '../../components/Header/MobileNav';
import { DesktopNav } from '../../components/Header/DesktopNav';

import ReactCountryFlag from 'react-country-flag';

import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';
import i18nConfig from '../../../i18n';

const { locales } = i18nConfig;

export const Header = () => {
  const { t, lang } = useTranslation();

  const { isOpen: isMobileNavOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const [flag, setFlag] = useState('EN');

  const handleFlag = useCallback(() => {
    if (flag === 'US') {
      setFlag('BR');
      setLanguage('en');
    } else {
      setFlag('US');
      setLanguage('pt');
    }
  }, [flag]);

  return (
    <Box>
      <Flex
        as={'header'}
        pos="fixed"
        top="0"
        w={'full'}
        minH={'60px'}
        boxShadow={'sm'}
        zIndex="999"
        justify={'center'}
        css={{
          backdropFilter: 'saturate(180%) blur(5px)',
          backgroundColor: useColorModeValue(
            'rgba(255, 255, 255, 0.8)',
            'rgba(26, 32, 44, 0.8)'
          )
        }}
      >
        <Container as={Flex} maxW={'7xl'} align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isMobileNavOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              size={'sm'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>

          <Flex
            flex={{ base: 1, md: 'auto' }}
            justify={{ base: 'center', md: 'start' }}
          >
            <Link href={'/'} passHref>
              <Stack
                as={'a'}
                direction={'row'}
                alignItems={'center'}
                spacing={{ base: 1, sm: 1 }}
              >
                <Icon as={LogoIcon} w={{ base: 8 }} h={{ base: 8 }} />
                <Heading
                  as={'h1'}
                  fontSize={'xl'}
                  display={{ base: 'none', md: 'block' }}
                >
                  <Text
                    fontSize={['2xl', '3xl']}
                    fontWeight="bold"
                    color="gray.400"
                    fontStyle="italic"
                    letterSpacing="tight"
                    w="64"
                  >
                    Sciagri
                  </Text>
                </Heading>
              </Stack>
            </Link>
          </Flex>

          <Stack
            direction={'row'}
            align={'center'}
            spacing={8}
            flex={{ base: 1, md: 'auto' }}
            justify={'flex-end'}
          >
            <DesktopNav display={{ base: 'none', md: 'flex' }} />
            <ReactCountryFlag
              countryCode={flag}
              svg
              onClick={handleFlag}
              style={{
                fontSize: '25px',
                cursor: 'pointer'
              }}
            />

            <IconButton
              size={'sm'}
              variant={'ghost'}
              aria-label={'Toggle Color Mode'}
              onClick={toggleColorMode}
              outline="0"
              icon={
                colorMode == 'light' ? (
                  <IoMoon size={18} />
                ) : (
                  <IoSunny size={18} />
                )
              }
            />
          </Stack>
        </Container>
      </Flex>
      <MobileNav isOpen={isMobileNavOpen} />
    </Box>
  );
};
