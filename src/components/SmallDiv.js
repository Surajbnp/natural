"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";
import { GiCoolSpices } from "react-icons/gi";
import { GiHotSpices } from "react-icons/gi";
import styles from "../styles/small.module.css";
import { FcLike } from "react-icons/fc";

const Card = ({ heading, description, icon }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
        </Box>
      </Stack>
    </Box>
  );
};

export default function SmallDiv() {
  return (
    <Box p={8}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          How Our Spices Is Different From Market
        </Heading>
        <Text fontWeight={600} fontSize={{ base: "sm", sm: "lg" }}>
          We are using high quality spices and modern technology.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex
          className={styles.small}
          flexWrap="wrap"
          gridGap={6}
          justify="center"
        >
          <Card
            heading={"Cool Grinding Technology"}
            icon={<Icon color={"blue"} as={GiCoolSpices} w={10} h={10} />}
          />
          <Card
            heading={"High Quality Gredients."}
            icon={<Icon as={GiHotSpices} color={"yellow.600"} w={10} h={10} />}
            description={"High Quality Gredients."}
            href={"#"}
          />
          <Card
            heading={"100% Hygine & Pure"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          />
          <Card
            heading={"Low Cost"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          />
          <Card
            heading={"10 Health Benifits"}
            icon={<Icon as={FcLike} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
