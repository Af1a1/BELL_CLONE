import * as React from "react";
import {
  Box, FormControl, Icon, Input,
  NativeBaseProvider, ScrollView, Stack, Text, Spacer, Flex, View
} from "native-base";
import theme from "../config/theme";
import Card from "./shared/Card";
import { MaterialIcons } from "@expo/vector-icons";
import CommonButton from "./shared/CommonButton";
import { useState } from "react";

export default function CardDetailsScreen({ navigation }) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [groupValue, setGroupValue] = useState([])

  return (
    <NativeBaseProvider theme={theme}>
      <Card>
        <ScrollView
          w={{
            base: "100%",
            md: "100%",
          }}
        >
          <Stack
            space={2.5}
            alignSelf="center"
            px="4"
            safeArea
            mt="4"
            w={{
              base: "100%",
              md: "25%",
            }}
          >
            <Box>
              <FormControl mb="3" color={ theme.colors.primary.dark } >
                <FormControl.Label>Card Number</FormControl.Label>
                <Input placeholder="Enter Your Card Number"  name="amount" InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="credit-card" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                } _focus={{ border: `1.5px solid ${theme.colors.primary.dark}` }} />
              </FormControl>
              <Flex direction="row" mb="3">
                <View style={{ width: '150px' }}>
                  <FormControl.Label>Expiration Date</FormControl.Label>
                  <Input type="date" placeholder="Date"  name="amount" InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="calendar-today" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  } _focus={{ border: `1.5px solid ${theme.colors.primary.dark}` }} />
                </View>
                <Spacer />
                <View>
                  <FormControl.Label ml="-1" _text={{ align:'left', alignItems: 'left', textAlign: 'left' }}>CVN</FormControl.Label>
                  <Input type="number" placeholder="CVN"  name="cvn" _focus={{ border: `1.5px solid ${theme.colors.primary.dark}` }} />
                </View>
              </Flex>
              <Box
                my="3"
                p="5"
                backgroundColor="muted.200"
                rounded="xl"
                _text={{
                  fontSize: 'md',
                  fontWeight: 'medium',
                  color: 'warmGray.50',
                  textAlign: 'left',
                }}
              >
                <Text fontSize="sm" bold mb="3">
                  Total Amount
                </Text>
                <Text fontSize="sm">
                  Rs 1000
                </Text>
              </Box>
              <CommonButton navigation={navigation} text="Confirm Payment" route="Card Details" />
            </Box>
          </Stack>
        </ScrollView>
      </Card>
    </NativeBaseProvider>
  );
}
