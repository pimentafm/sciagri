import { Heading, Box, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
interface TextCardProps {
  title: string;
  content: string;
}

const MotionBox = motion(Box);

export default function TextCard({ title, content }: TextCardProps) {
  return (
    <MotionBox
      maxW={450}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'xl'}
      rounded={'lg'}
      p={4}
      mx="auto"
      textAlign={'center'}
      whileHover={{ scale: 1.1 }}
    >
      <Heading
        pl={4}
        pb={2}
        fontSize={'2xl'}
        color={'green.400'}
        fontFamily={'body'}
      >
        {title}
      </Heading>
      <Text
        textAlign={'justify'}
        color={useColorModeValue('gray.500', 'gray.400')}
        px={3}
      >
        {content}
      </Text>
    </MotionBox>
  );
}
