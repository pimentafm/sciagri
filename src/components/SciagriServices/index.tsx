import { ElementType } from 'react';
import {
  Heading,
  Box,
  Text,
  IconButton,
  Icon,
  Link,
  Tooltip,
  useColorModeValue
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

interface SciagriServicesProps {
  icon: ElementType;
  title: string;
  tooltip: string;
  content: string;
  url: string;
}

const MotionBox = motion(Box);

export default function SciagriService({
  icon,
  title,
  tooltip,
  content,
  url
}: SciagriServicesProps) {
  return (
    <MotionBox
      maxW={400}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'lg'}
      rounded={'lg'}
      p={2}
      mx="auto"
      minW={{
        base: '150px',
        sm: '200px',
        md: '350px',
        lg: '400px',
        xl: '400px'
      }}
      textAlign={'center'}
      whileHover={{ scale: 1.1 }}
      transition={{
        type: 'expand',
        damping: 20,
        stiffness: 100
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <Link href={url} _focus={{ outline: 0 }}>
        <Tooltip
          label={tooltip}
          aria-label={title}
          hasArrow
          bg="green.500"
          color="white"
          placement="top"
          maxW="200px"
        >
          <IconButton
            aria-label={title}
            w={20}
            h={20}
            m={2}
            bg="gray.700"
            colorScheme="gray"
            icon={<Icon as={icon} />}
            isRound
          />
        </Tooltip>
      </Link>

      <Heading
        display={{
          base: 'block',
          sm: 'block',
          md: 'block',
          lg: 'block',
          xl: 'block'
        }}
        mb={4}
        fontSize={{
          base: 'xs',
          sm: 'sm',
          md: 'md',
          lg: 'lg',
          xl: 'lg'
        }}
        color={'green.500'}
        fontFamily={'body'}
      >
        {title}
      </Heading>
      <Text
        display={{
          base: 'block',
          sm: 'block',
          md: 'block',
          lg: 'block',
          xl: 'block'
        }}
        mt={2}
        fontSize={{
          base: 'xs',
          sm: 'sm',
          md: 'md',
          lg: 'lg',
          xl: ''
        }}
        textAlign={'center'}
        color="gray.500"
        px={2}
      >
        {content}
      </Text>
    </MotionBox>
  );
}
