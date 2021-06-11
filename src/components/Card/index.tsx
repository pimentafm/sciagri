import {
  Heading,
  Avatar,
  Box,
  Text,
  Stack,
  IconButton,
  Icon,
  SimpleGrid,
  useColorModeValue
} from "@chakra-ui/react";
import NextLink from "next/link";

import { FaLinkedin, FaResearchgate, FaOrcid } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

export default function SocialProfileSimple() {
  return (
    <SimpleGrid gap={4} minChildWidth="400px" maxWidth={1480} mx="auto">
      <Box
        maxW={"400px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={4}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={"/images/fernando.jpg"}
          alt={"Fernando Martins Pimenta"}
          mb={4}
          pos={"relative"}
        />
        <Heading fontSize={"2xl"} color={"green.400"} fontFamily={"body"}>
          Fernando Martins Pimenta
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={2}>
          Engenheiro Agrimensor e Cartógrafo, Engenheiro de Biossitemas
        </Text>
        <Text
          textAlign={"justify"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Fernando Martins Pimenta é pesquisador associado ao Grupo de Pesquisa
          em Interação Atmosfera Biosfera - UFV. Suas áreas de atuação envolvem
          geoprocessamento, sensoriamento remoto, computação paralela e de alta
          performance e automação de análises geoespaciais. Possui formação em
          Engenharia de Agrimensura e Cartografia pela Universidade Federal de
          Viçosa (UFV), MG, Brasil e Engenharia de Biossistemas pela
          Universidade Federal de São João del-Rei (UFSJ), MG, Brasil.
          Atualmente é estudante de pós-graduação no MBA em Data Science &
          Analysis na Escola Superior de Agricultura Luiz de Queiroz na
          Universidade de São Paulo (USP/ESALQ), São Paulo, Brazil.
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <NextLink
            href="https://www.linkedin.com/in/fernando-m-pimenta/"
            passHref
          >
            <IconButton
              aria-label="LinkedIn"
              icon={<Icon as={FaLinkedin} w={8} h={8} color="green.400" />}
            />
          </NextLink>

          <NextLink
            href="https://www.researchgate.net/profile/Fernando-Pimenta-2"
            passHref
          >
            <IconButton
              aria-label="Research Gate"
              icon={<Icon as={FaResearchgate} w={8} h={8} color="green.400" />}
            />
          </NextLink>

          <NextLink href="http://orcid.org/0000-0002-7589-5721" passHref>
            <IconButton
              aria-label="Orcid ID"
              icon={<Icon as={FaOrcid} w={8} h={8} color="green.400" />}
            />
          </NextLink>

          <NextLink href="http://lattes.cnpq.br/0646984654461300" passHref>
            <IconButton
              aria-label="Lattes"
              icon={<Icon as={HiAcademicCap} w={8} h={8} color="green.400" />}
            />
          </NextLink>
        </Stack>
      </Box>

      <Box
        maxW={"400px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={4}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={"/images/igor.jpg"}
          alt={"Igor Boninsenha"}
          mb={4}
          pos={"relative"}
        />
        <Heading fontSize={"2xl"} color={"green.400"} fontFamily={"body"}>
          Igor Boninsenha
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={2}>
          Mestre em Engenharia Agrícola, Engenheiro Agrônomo
        </Text>
        <Text
          textAlign={"justify"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Igor Boninsenha Possui graduação em Agronomia pela Universidade
          Federal de Viçosa (2019) e mestrado em Engenharia Agrícola pela
          Universidade Federal de Viçosa (2021). Tem experiência na área de
          Engenharia Agrícola, com ênfase em Manejo de Irrigação, atuando
          principalmente nos seguintes temas: subsídio agrícola, desenvolvimento
          agrícola, water security, políticas públicas e conflitos de outorga de
          água.
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <NextLink
            href="https://www.linkedin.com/in/igor-boninsenha-401a3ba0/"
            passHref
          >
            <IconButton
              aria-label="LinkedIn"
              icon={<Icon as={FaLinkedin} w={8} h={8} color="green.400" />}
            />
          </NextLink>

          <NextLink
            href="https://www.researchgate.net/profile/Igor-Boninsenha"
            passHref
          >
            <IconButton
              aria-label="Research Gate"
              icon={<Icon as={FaResearchgate} w={8} h={8} color="green.400" />}
            />
          </NextLink>

          <NextLink href="https://orcid.org/0000-0001-6674-2873" passHref>
            <IconButton
              aria-label="Orcid ID"
              icon={<Icon as={FaOrcid} w={8} h={8} color="green.400" />}
            />
          </NextLink>

          <NextLink href="http://lattes.cnpq.br/9360049694442293" passHref>
            <IconButton
              aria-label="Lattes"
              icon={<Icon as={HiAcademicCap} w={8} h={8} color="green.400" />}
            />
          </NextLink>
        </Stack>
      </Box>
    </SimpleGrid>
  );
}
