import { SyntheticEvent, useState, useEffect } from 'react';
import {
  Collapse,
  Flex,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

import useTranslation from 'next-translate/useTranslation';

import { motion } from 'framer-motion';
interface MobileNavProps {
  isOpen: boolean;
}

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const MotionStack = motion(Stack);

export const MobileNav = ({ isOpen }: MobileNavProps) => {
  if (!isOpen) return null;

  const { t, lang } = useTranslation('common');

  const [navItens, setNavItens] = useState<NavItem[]>([
    {
      label: t('menu_about'),
      href: 'about'
    }
  ]);

  useEffect(() => {
    setNavItens([
      {
        label: t('menu_about'),
        href: 'about'
      }
    ]);
  }, [lang]);

  return (
    <MotionStack
      p={4}
      display={{ md: 'none' }}
      zIndex={9999}
      pos="fixed"
      top="60px"
      w={'full'}
      bg={'white'}
      minH={'calc(100vh - 60px)'}
      css={{
        backdropFilter: 'saturate(180%) blur(5px)',
        backgroundColor: useColorModeValue(
          'rgba(255, 255, 255, 0.8)',
          'rgba(26, 32, 44, 0.8)'
        )
      }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 100
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      {navItens.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </MotionStack>
  );
};

const MobileNavItem = ({ href, children, label }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  const handleToggle = (e: SyntheticEvent) => {
    if (children) {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <Stack spacing={4} onClick={handleToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none'
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <NextLink href={child.href!} passHref={true}>
                <Link key={child.label} py={2}>
                  {child.label}
                </Link>
              </NextLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
