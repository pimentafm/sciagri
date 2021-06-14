import { Flex, SimpleGrid } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface PageSectionProps {
  bgColor?: string;
  children: ReactNode;
}

export default function PageSection({ children }: PageSectionProps) {
  return (
    <Flex
      // css={{
      //   backdropFilter: 'saturate(180%) blur(5px)',
      //   backgroundColor: useColorModeValue(
      //     'rgba(255, 255, 255, 0.8)',
      //     'rgba(26, 32, 44, 0.8)'
      //   )
      // }}
      w="100%"
      my={6}
      maxWidth={1480}
      mx="auto"
      p={4}
    >
      <SimpleGrid flex={1} gap={8} minChildWidth={320} align="flex-start">
        {children}
      </SimpleGrid>
    </Flex>
  );
}
