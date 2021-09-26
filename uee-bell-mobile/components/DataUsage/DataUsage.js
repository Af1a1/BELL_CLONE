import * as React from 'react';
import {
  Box,
  FormControl,
  Icon,
  Input,
  NativeBaseProvider,
  ScrollView,
  Stack,
  Text,
  Checkbox,
  VStack,
  Flex,
  Spacer,
  Center,
} from 'native-base';
import theme from '../../config/theme';
import Card from '../shared/Card';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import CommonButton from '../shared/CommonButton';
import { useState } from 'react';

export default function DataUsage({ navigation }) {
  const [groupValue, setGroupValue] = useState([]);

  return (
    <NativeBaseProvider theme={theme}>
      <ScrollView
        w={{
          base: '100%',
          md: '100%',
        }}
      >
        <VStack space={4} alignItems="center">
          <Text  bold fontSize="lg" w="100%" p={5}>Day Time Data</Text>
          <Center w="100%">
            <Text>chart</Text>
          </Center>
            <Spacer />
          <Flex w="100%" direction="row" p="5" align="center" justify="center">
            <Spacer />
            <Flex direction="column" align="center" justify="center">
              <Text w="100%" bold fontSize="2xl" color={theme.colors.primary.dark}>
                35.75 GB
              </Text>
              <Center w="100%" color={theme.colors.primary.dark}>Remaining data</Center>
            </Flex>
            <Spacer />
            <Flex direction="column" align="center" justify="center">
              <Text bold fontSize="2xl" w="100%" color={theme.colors.primary.default}>
                5.75 GB
              </Text>
              <Center w="100%" color={theme.colors.primary.default}>Used data</Center>
            </Flex>
            <Spacer />
          </Flex>
          <Box w="100%">
            <Card>
              <Text bold fontSize="lg">
                Valid Period
              </Text>
              <Text fontSize="md">From 01/10/2021 - To 01/10/2021</Text>
            </Card>
            <Card>
              <Text bold fontSize="lg">
                Today Usage
              </Text>
              <Text fontSize="md">1.75 GB</Text>
            </Card>
          </Box>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
}
