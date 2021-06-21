import { ReactNode } from 'react';
import { Flex, Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react';

interface PageSectionProps {
  light?: string;
  dark?: string;
  children: ReactNode;
}

export default function PageSection({
  light = 'white',
  dark = 'gray.800',
  children
}: PageSectionProps) {
  return (
    <Box w="100vw" bg={useColorModeValue(light, dark)}>
      <Flex maxWidth={1480} mx="auto" p={8}>
        <SimpleGrid flex={1} gap={8} minChildWidth={300} align="center">
          {children}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
