import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Crousel from "../components/Crousel";
import { Box, Text, Button, useColorModeValue } from "@chakra-ui/react";
import styles from "../styles/homepage.module.css";
import ProductCard from "../components/ProductCard";
import { FaVolumeMute } from "react-icons/fa";
import { GoUnmute } from "react-icons/go";
import About from "../components/About";
import SmallDiv from "../components/SmallDiv";

const HomePage = () => {
  const images = [
    "https://res.cloudinary.com/dddnxiqpq/image/upload/v1720072823/pos3_nxyhu0.jpg",
    "https://res.cloudinary.com/dddnxiqpq/image/upload/v1720070443/Screenshot_4-7-2024_105027__wbvyyg.jpg",
    "https://res.cloudinary.com/dddnxiqpq/image/upload/v1720072666/poster1_ibbgxe.png",
  ];

  const masalapic = [
    {
      img: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1719932667/tur_pyfhuh.jpg",
      name: "Turmeric Powder",
    },
    {
      img: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1719916664/www_tarhn7.jpg",
      name: "Red Chilli Powder",
    },
    {
      img: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1719932650/cor_tzgw4n.jpg",
      name: "Coriander Powder",
    },
    {
      img: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1719916664/www_tarhn7.jpg",
      name: "Coriander Powder",
    },
    {
      img: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1719916664/www_tarhn7.jpg",
      name: "Coriander Powder",
    },
  ];

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const { ref: videoContainerRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      className={styles.container}
    >
      <Crousel images={images} />
      <Box h={"fit-content"} mt={{ base: "10px", md: "30px" }} width={"100%"}>
        <Text color={'black'} fontSize={{ base: "40px", md: "60px" }}>OUR VARIANTS</Text>
        <Box className={styles.productCont}>
          {masalapic.length &&
            masalapic.map((e) => {
              return <ProductCard key={e.name} e={e} />;
            })}
        </Box>
      </Box>
      <Box
        pos={"relative"}
        className={styles.videoCont}
        ref={videoContainerRef}
      >
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/dddnxiqpq/video/upload/v1719934346/posvid_qvxj2t.mp4"
          width="100%"
          muted={isMuted}
        ></video>
        <Box
          onClick={toggleMute}
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          bg="rgba(0, 0, 0, 0.2)"
          color="white"
          _hover={{ bg: "rgba(0, 0, 0, 0.7)" }}
          w={{ base: "60px", md: "80px" }}
          h={{ base: "60px", md: "80px" }}
          borderRadius={"5px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {isMuted ? (
            <FaVolumeMute size={"30px"} />
          ) : (
            <GoUnmute size={"30px"} />
          )}
        </Box>
      </Box>
      <Box className={styles.detailsDiv}>
        <About />
      </Box>
      <Box className={styles.smallDetails}>
        <SmallDiv />
      </Box>
    </Box>
  );
};

export default HomePage;
