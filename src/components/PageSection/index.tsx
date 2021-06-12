import { Flex, SimpleGrid } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface PageSectionProps {
  bgColor?: string;
  children: ReactNode;
}

export default function PageSection({
  bgColor = 'white',
  children
}: PageSectionProps) {
  return (
    <Flex bg={bgColor} w="100%" my={6} maxWidth={1480} mx="auto" p={4}>
      <SimpleGrid flex={1} gap={4} minChildWidth={320} align="flex-start">
        {children}
      </SimpleGrid>
    </Flex>
  );
}
