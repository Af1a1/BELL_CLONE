import * as React from "react";
import {
  NativeBaseProvider,
  Text,
} from "native-base";
import theme from "../config/theme";
import Card from "./shared/Card";

export default function HomeScreen({ navigation }) {
  return (
    <NativeBaseProvider theme={theme}>
      <Card>
        <Text>Hello from child</Text>
      </Card>
    </NativeBaseProvider>
  );
}
