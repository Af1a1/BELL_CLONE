import React from "react";
import {
  Box,
  HStack,
  Image,
  Text,
  View,
  VStack,
  NativeBaseProvider, ScrollView
} from "native-base";
import theme from "../config/theme";

const PaymentHistory = ({ navigation }) => {
  const data = [
    {
      name: "Monthly Payment",
      date: "Sep 2021 03.00 AM",
      amount: "Rs 1000",
    },
    {
      name: "Add-on Payment",
      date: "Nov 2021 09.00 AM",
      amount: "Rs 200",
    },
    {
      name: "Extra Data Payment",
      date: "Aug 2021 10.00 PM",
      amount: "Rs 2000",
    },
    {
      name: "Monthly Payment",
      date: "JUL 2021 10.00 AM",
      amount: "Rs 1000",
    },
    {
      name: "Monthly Payment",
      date: "JUN 2021 11.00 AM",
      amount: "Rs 1000",
    },
    {
      name: "Monthly Payment",
      date: "Jan 2021 04.00 AM",
      amount: "Rs 1000",
    },
    {
      name: "Monthly Payment",
      date: "Sep 2021 03.00 AM",
      amount: "Rs 1000",
    },
    {
      name: "Add-on Payment",
      date: "Nov 2021 09.00 AM",
      amount: "Rs 200",
    },
    {
      name: "Extra Data Payment",
      date: "Aug 2021 10.00 PM",
      amount: "Rs 2000",
    },
    {
      name: "Monthly Payment",
      date: "JUL 2021 10.00 AM",
      amount: "Rs 1000",
    },
    {
      name: "Monthly Payment",
      date: "JUN 2021 11.00 AM",
      amount: "Rs 1000",
    },
    {
      name: "Monthly Payment",
      date: "Jan 2021 04.00 AM",
      amount: "Rs 1000",
    },
  ];

  return (
    <NativeBaseProvider theme={theme}>
      <ScrollView
        mt={3}
        w={{
          base: "100%",
          md: "100%",
        }}
      >
        {data.map((pay, index) => (
          <Box
            id={index}
            bg={theme.colors.primary.default}
            py={4}
            px={3}
            mb={3}
            flex={1}
            width={350}
            rounded="md"
            alignSelf="center"
            maxWidth="100%"
          >
            <HStack justifyContent="space-between">
              <Box justifyContent="space-between">
                <VStack space={2}>
                  <Text color="white" fontSize="lg">
                    {pay.name}
                  </Text>
                  <Text fontSize="sm" color="white">
                    {pay.date}
                  </Text>
                </VStack>
              </Box>
              <Text fontSize="md" bold color="white">
                {pay.amount}
              </Text>
            </HStack>
          </Box>
        ))}
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default PaymentHistory;
