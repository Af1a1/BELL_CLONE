import React, { useState } from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Icon,
  HStack,
  Center,
  Pressable,
} from "native-base";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import theme from "../../config/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../HomeScreen";
import PaymentScreen from "../PaymentScreen";
import DataUsageHome from "../DataUsage/DataUsageHome";

const Tab = createBottomTabNavigator();

export default function Footer() {
  const [selected, setSelected] = useState(1);
  return (
    <NativeBaseProvider theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
              color = focused
                ? theme.colors.primary.dark
                : theme.colors.primary.white;
            } else if (route.name === "Payment") {
              iconName = "cash";
              color = focused
                ? theme.colors.primary.dark
                : theme.colors.primary.white;
            } else if (route.name === "Usage") {
              iconName = "chart-pie";
              color = focused
                ? theme.colors.primary.dark
                : theme.colors.primary.white;
            } else if (route.name === "AddOn") {
              iconName = "plus-circle";
              color = focused
                ? theme.colors.primary.dark
                : theme.colors.primary.white;
            } else if (route.name === "Profile") {
              iconName = "account";
              color = focused
                ? theme.colors.primary.dark
                : theme.colors.primary.white;
            }

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarInactiveBackgroundColor: theme.colors.primary.default,
          tabBarInactiveTintColor: theme.colors.primary.light,
          tabBarShowLabel: true,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Payment" component={PaymentScreen} />
        <Tab.Screen name="Usage" component={DataUsageHome} />
        <Tab.Screen name="AddOn" component={PaymentScreen} />
        <Tab.Screen name="Profile" component={PaymentScreen} />
      </Tab.Navigator>
    </NativeBaseProvider>
  );
}
