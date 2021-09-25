import React from "react";
import { Button, View } from "native-base";
import { StyleSheet } from "react-native";
import { flex, right } from "styled-system";

const CommonButton = ({ route, text, navigation }) => {

  return (
    <View style={styles.wrapper} >
      <Button my='3' style={styles.container} onPress={() => navigation.navigate(route)}>{ text }</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 'auto',
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 'auto',
  },
  container: {
    float: right,
    align: right,
    display: flex,
    padding: 10,
    backgroundImage: 'linear-gradient(90deg, #283D87 3.87%, #5373E5 97.42%)',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
    transform: 'matrix(1, 0, 0, 1, 0, 0)',
  },
});

export default CommonButton;
