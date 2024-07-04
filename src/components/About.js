"use client";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function About() {
  return (
    <Box m={"auto"} w={"80%"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Story
          </Text>
          <Heading>We Believe in Quality</Heading>
          <Text color={"black"} fontWeight={600} fontSize={"lg"}>
            Our Mission Is to Bring Pure Spices to Every Home.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Text
              fontFamily={"Poppins, sans-serif"}
              fontWeight={400}
              fontSize={"20px"}
              textAlign={"start"}
            >
              मैं एक छोटे से गाँव में पला-बढ़ा हूँ, जहाँ मेरी दादी के रसोईघर की
              यादें आज भी ताज़ा हैं। ताजे पिसे मसालों की खुशबू से घर महक उठता
              था, और हर भोजन स्वादिष्ट हो जाता था। उन्होंने हमेशा शुद्ध मसालों
              का उपयोग किया और हमें भी यही सिखाया। बड़े होने पर, मैंने देखा कि
              बाजार में कई मसाले मिलावट वाले होते हैं, जिनमें रंग और रसायन मिलाए
              जाते हैं।
            </Text>
            <Text
              textAlign={"start"}
              fontFamily={"Poppins, sans-serif"}
              fontWeight={400}
              fontSize={"20px"}
            >
              इससे न केवल स्वाद बल्कि सेहत भी प्रभावित होती है। इस समस्या का
              समाधान करने के लिए मैंने पियोरस्पाइस की स्थापना की। हमारा लक्ष्य
              है 100% शुद्ध मसाले प्रदान करना, जिनमें कूल ग्राइंड तकनीक का उपयोग
              होता है ताकि प्राकृतिक तेल और स्वाद बरकरार रहें।
            </Text>
            <Text
              fontFamily={"Poppins, sans-serif"}
              fontWeight={400}
              fontSize={"20px"}
              textAlign={"start"}
            >
              मसाले हमारे दैनिक जीवन में बहुत महत्वपूर्ण हैं। ये न केवल स्वाद
              बढ़ाते हैं, बल्कि इम्यूनिटी को बढ़ाते हैं और पाचन में मदद करते
              हैं। मिलावट वाले मसाले हमारे स्वास्थ्य के लिए हानिकारक हो सकते
              हैं।
            </Text>
            <Text
              fontFamily={"Poppins, sans-serif"}
              fontWeight={400}
              fontSize={"20px"}
              textAlign={"start"}
            >
              पियोरस्पाइस में हम हर पैकेट में शुद्धता और गुणवत्ता का वादा करते
              हैं, ताकि आपके किचन में भी वही खुशबू और स्वाद हो।
            </Text>
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://4.imimg.com/data4/TH/HD/ANDROID-68431564/product.jpeg"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
