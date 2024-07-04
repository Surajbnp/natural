import React from "react";
import styles from "../styles/card.module.css";
import { Box, Image, Text } from "@chakra-ui/react";

const ProductCard = ({ e }) => {
  return (
    <Box className={styles.cardCont}>
      <Box className={styles.imageContainer}>
        <Image src={e?.img} className={styles.image} />
      </Box>
      <Text padding={'20px'} fontSize={'30px'}>{e?.name}</Text>
    </Box>
  );
};

export default ProductCard;
