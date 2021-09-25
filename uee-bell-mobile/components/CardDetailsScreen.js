import * as React from "react";
import {
  Box, FormControl, Icon, Input,
  NativeBaseProvider, ScrollView, Stack, Text, Checkbox,
} from "native-base";
import theme from "../config/theme";
import Card from "./shared/Card";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import CommonButton from "./shared/CommonButton";
import { useState } from "react";

export default function CardDetailsScreen({ navigation }) {

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
              <Checkbox.Group
                mt="2"
                colorScheme="green"
                accessibilityLabel="choose multiple items"
                onChange={(values) => {
                  setGroupValue(values || [])
                }}
                alignItems="flex-start"
              >
                <Checkbox colorScheme={ theme.colors.primary.default } _checked={{backgroundColor:theme.colors.primary.dark}} value="Visa" size="sm" my="1" mr="3" outlineColor={ theme.colors.primary.default }>
                  <Icon
                    as={<MaterialCommunityIcons name="credit-card" />}
                    size={5}
                    px="2"
                    color={ theme.colors.primary.dark }
                  /> <Text fontSize="sm">
                  Visa
                </Text>
                </Checkbox>
                <Checkbox value="Amex" my="1" colorScheme={ theme.colors.primary.default } _checked={{backgroundColor:theme.colors.primary.dark}} >
                  <Icon
                    as={<MaterialCommunityIcons name="id-card" />}
                    size={5}
                    px="2"
                    color={ theme.colors.primary.dark }
                  /> <Text fontSize="sm">
                  Amex
                </Text>
                </Checkbox>
              </Checkbox.Group>
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
              <CommonButton navigation={navigation} text="Pay Now" route="Card Details" />
            </Box>
          </Stack>
        </ScrollView>
      </Card>
    </NativeBaseProvider>
  );
}
