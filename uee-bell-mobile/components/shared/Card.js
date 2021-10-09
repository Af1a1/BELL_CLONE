import React from 'react';
import { Box, View } from 'native-base';
import { StyleSheet } from 'react-native';
import { maxWidth, minHeight } from 'styled-system';
import center from 'native-base/src/theme/components/center';

const Card = ({ height, width, padding, margin,  border, children}) => {
console.log("🚀 ~ file: Card.js ~ line 8 ~ Card ~ padding", padding)

  const styles = StyleSheet.create({
    container: {
      margin: margin ? margin : 10,
      width: width ? width : maxWidth,
      height: height ? height : minHeight,
      padding: padding ? padding : 10,
      alignItems: center,
      justifyContent: center,
      background: '#FFFFFF',
      boxShadow: '0px 5px 18px rgba(0, 0, 0, 0.25)',
      borderRadius: '14px',
      transform: 'matrix(1, 0, 0, 1, 0, 0)',
    },
  });

  return (
    <Box
      style={styles.container}
    >
      { children }
    </Box>
  );
};



export default Card;
