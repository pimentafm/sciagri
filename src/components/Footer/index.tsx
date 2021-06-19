import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden
} from '@chakra-ui/react';

import { FaLinkedin } from 'react-icons/fa';
import { ReactNode } from 'react';

import useTranslation from 'next-translate/useTranslation';

import NextLink from 'next/link';

import { LogoIcon } from '../LogoIcon';

const SocialButton = ({
  children,
  label,
  href
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target="_blank"
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  const { t, lang } = useTranslation('common');
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <LogoIcon />
        <Stack direction={'row'} spacing={6}>
          <NextLink href={'/'} locale={lang}>
            {t('menu_home')}
          </NextLink>
          <NextLink href={'/about'} locale={lang}>
            {t('menu_about')}
          </NextLink>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>
            Copiright© 2021 Sciagri® Smart Agriculture LTDA. All rights
            reserved.
          </Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton
              label={'LinkedIn'}
              href={'https://www.linkedin.com/company/sciagritech/'}
            >
              <FaLinkedin />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
