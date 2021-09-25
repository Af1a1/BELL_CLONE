import React from 'react';
import { Box, View } from "native-base";
import { StyleSheet } from 'react-native';
import { maxWidth, minHeight } from "styled-system";
import center from "native-base/src/theme/components/center";

const Card = ({ height, width,  border, children}) => {

  return (
    <Box
      style={styles.container}
    >
      { children }
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: maxWidth,
    height: minHeight,
    padding: 10,
    alignItems: center,
    justifyContent: center,
    background: '#FFFFFF',
    boxShadow: '0px 5px 18px rgba(0, 0, 0, 0.25)',
    borderRadius: '14px',
    transform: 'matrix(1, 0, 0, 1, 0, 0)',
  },
});


export default Card;
