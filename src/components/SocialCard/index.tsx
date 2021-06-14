import {
  Heading,
  Avatar,
  Box,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { ReactElement } from 'react';

import { motion } from 'framer-motion';
const MotionBox = motion(Box);

type SocialCardProps = {
  name: string;
  imagesrc: string;
  job: string;
  content: string;
  children: ReactElement;
};

export default function SocialCard({
  imagesrc,
  name,
  job,
  content,
  children
}: SocialCardProps) {
  return (
    <MotionBox
      maxW={450}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'lg'}
      p={4}
      mx="auto"
      textAlign={'center'}
      whileHover={{ scale: 1.1 }}
    >
      <Avatar size={'xl'} src={imagesrc} alt={name} mb={4} pos={'relative'} />

      <Heading fontSize={'2xl'} color={'green.400'} fontFamily={'body'}>
        {name}
      </Heading>
      <Text fontWeight={600} color={'gray.500'} mb={2}>
        {job}
      </Text>
      <Text
        textAlign={'justify'}
        color={useColorModeValue('gray.500', 'gray.400')}
        px={3}
      >
        {content}
      </Text>

      {children}
    </MotionBox>
  );
}
