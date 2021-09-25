import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Footer from "./components/shared/Footer";
import HomeScreen from "./components/HomeScreen";
import theme from "./config/theme";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";
import PaymentScreen from "./components/PaymentScreen";
import { Button, Text, View } from "native-base";

function App() {
  return (
    <>
      <NavigationContainer>
        <Footer />
      </NavigationContainer>
    </>
  );
}

export default App;
