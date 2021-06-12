import { ElementType } from 'react';

import { Stack, IconButton, Icon, IconProps } from '@chakra-ui/react';
import NextLink from 'next/link';

interface networkData extends IconProps {
  icon: ElementType;
  name: string;
  url: string;
}

type SocialNetworksProps = {
  networks?: networkData[];
};

export default function SocialNetworks({ networks }: SocialNetworksProps) {
  return (
    <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
      {networks.map((item, index) => {
        return (
          <NextLink key={index} href={item.url} passHref>
            <IconButton
              aria-label={item.name}
              icon={<Icon as={item.icon} w={8} h={8} color="green.400" />}
            />
          </NextLink>
        );
      })}
    </Stack>
  );
}
