import { ElementType } from 'react';
import {
  Heading,
  Box,
  Text,
  IconButton,
  Icon,
  Link,
  Tooltip
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
      maxW={300}
      bg="gray.700"
      boxShadow={'xl'}
      rounded={'lg'}
      p={4}
      mx="auto"
      minW={{
        base: '50px',
        sm: '100px',
        md: '320px',
        lg: '320px',
        xl: '320px'
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
            w={14}
            h={14}
            m={2}
            bg="green.500"
            colorScheme="green"
            icon={<Icon as={icon} w={12} h={12} color="white" />}
            isRound
          />
        </Tooltip>
      </Link>

      <Heading
        display={{
          base: 'none',
          sm: 'none',
          md: 'block',
          lg: 'block',
          xl: 'block'
        }}
        mb={4}
        fontSize={'xl'}
        color={'gray.100'}
        fontFamily={'body'}
      >
        {title}
      </Heading>
      <Text
        display={{
          base: 'none',
          sm: 'none',
          md: 'none',
          lg: 'none',
          xl: 'block'
        }}
        mt={2}
        textAlign={'center'}
        color="white"
        px={2}
      >
        {content}
      </Text>
    </MotionBox>
  );
}
