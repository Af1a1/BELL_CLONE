import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Footer from "./components/shared/Footer";
import HomeScreen from "./components/HomeScreen";
import theme from "./config/theme";
import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";
import PaymentScreen from "./components/PaymentScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Payment" component={PaymentScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <Footer />
      </NativeBaseProvider>
    </>
  );
}

export default App;
