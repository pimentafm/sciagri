import { ReactNode } from 'react';
import { Flex, Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react';

interface PageSectionProps {
  rgbLight?: string;
  rgbDark?: string;
  children: ReactNode;
}

export default function PageSection({
  rgbLight = 'rgba(255, 255, 255, 0.8)',
  rgbDark = 'rgba(26, 32, 44, 0.8)',
  children
}: PageSectionProps) {
  return (
    <Box
      w="100vw"
      css={{
        backdropFilter: 'saturate(180%) blur(5px)',
        backgroundColor: useColorModeValue(rgbLight, rgbDark)
      }}
    >
      <Flex maxWidth={1480} mx="auto" p={8}>
        <SimpleGrid flex={1} gap={8} minChildWidth={320} align="flex-start">
          {children}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
