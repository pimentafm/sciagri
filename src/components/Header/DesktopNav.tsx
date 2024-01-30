import { useEffect, useState } from 'react';
import { Stack, Box, BoxProps, Popover, useColorModeValue, PopoverContent, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const DesktopNav = (props: BoxProps) => {
  const { t, lang } = useTranslation('common');

  const COLORS = {
    text: {
      light: 'gray.600',
      dark: 'gray.200',
    },
    hover: {
      light: 'gray.800',
      dark: 'white',
    },
  };

  const initializeNavItems = () => [
    {
      label: t('menu_home'),
      href: '/',
    },
    {
      label: t('menu_about'),
      href: '/about',
    },
  ];

  const [navItems, setNavItems] = useState<NavItem[]>(initializeNavItems);

  useEffect(() => {
    setNavItems(initializeNavItems());
  }, [lang]);

  return (
    <Stack direction={'row'} spacing={4} {...props}>
      {navItems.map((navItem) => {
        const { href, label } = navItem;

        return (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <NextLink href={href} locale={lang}>
                <Text
                  padding={1}
                  fontSize={'sm'}
                  fontWeight={500}
                  lang={lang}
                  color={useColorModeValue(COLORS.text.light, COLORS.text.dark)}
                  _hover={{
                    textDecoration: 'none',
                    color: useColorModeValue(COLORS.hover.light, COLORS.hover.dark),
                    cursor: 'pointer',
                  }}
                >
                  {label}
                </Text>
              </NextLink>
              {navItem.children && navItem.children.length > 0 && (
                <PopoverContent
                  border={0}
                  boxShadow={'lg'}
                  bg={useColorModeValue('white', 'gray.800')}
                  p={4}
                  rounded={'lg'}
                  minW={'sm'}
                ></PopoverContent>
              )}
            </Popover>
          </Box>
        );
      })}
    </Stack>
  );
};
