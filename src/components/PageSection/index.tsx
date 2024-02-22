import { ReactNode } from 'react';
import { Flex, Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react';

interface PageSectionProps {
  id?: string;
  light?: string;
  dark?: string;
  children: ReactNode;
}

export default function PageSection({
  light = 'white',
  id,
  dark = 'gray.800',
  children
}: PageSectionProps) {
  return (
    <Box id={id} w="100vw" bg={useColorModeValue(light, dark)}>
      <Flex maxWidth={1724} mx="auto"  p={8}>
        <SimpleGrid flex={1} gap={8} minChildWidth={450} alignContent="center">
          {children}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
