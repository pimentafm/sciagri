import { Heading, Box, Text, useColorModeValue } from '@chakra-ui/react';

export default function TextCard() {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'lg'}
      textAlign={'justify'}
      p={4}
    >
      <Heading
        pl={4}
        pb={2}
        fontSize={'2xl'}
        color={'green.400'}
        fontFamily={'body'}
      >
        Missão
      </Heading>
      <Text
        textAlign={'justify'}
        color={useColorModeValue('gray.500', 'gray.400')}
        px={3}
      >
        Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipisicing
        elit. Odio molestiae laudantium incidunt quisquam perspiciatis eaque,
        accusamus praesentium totam, numquam eum vel, perferendis error
        doloribus? Commodi, ea esse. Modi, nostrum perferendis!
      </Text>
    </Box>
  );
}
