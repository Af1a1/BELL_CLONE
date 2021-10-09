import * as React from 'react';
import {
  Box,
  NativeBaseProvider,
  ScrollView,
  Stack,
  Text,
  Checkbox,
  VStack,
  Flex,
  Spacer,
  Center,
  CircularProgress,
} from 'native-base';
import theme from '../../config/theme';
import Card from '../shared/Card';
import { useState } from 'react';
// import CircularProgress from 'react-native-circular-progress-indicator';

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
          <Text bold fontSize="lg" w="100%" p={5}>
            Day Time Data
          </Text>
          <Flex w="100%" align="center" justify="center" w="100%">
            <CircularProgress
              mt={6}
              value={10}
              size={200}
              color="#5373E5"
              thickness={20}
              trackColor="#C4C4C4"
            >
              <Center>
                <Text bold fontSize="sm" color="#283D87" >
                  Total
                </Text>
                <Text bold fontSize="3xl" color="#283D87" >
                  50 GB
                </Text>
              </Center>
            </CircularProgress>
          </Flex>
          <Spacer />
          <Flex w="100%" direction="row" p="5" align="center" justify="center">
            <Spacer />
            <Flex direction="column" align="center" justify="center">
              <Text
                w="100%"
                bold
                fontSize="2xl"
                color={theme.colors.primary.dark}
              >
                35.75 GB
              </Text>
              <Center w="100%" color={theme.colors.primary.dark}>
                Remaining data
              </Center>
            </Flex>
            <Spacer />
            <Flex direction="column" align="center" justify="center">
              <Text
                bold
                fontSize="2xl"
                w="100%"
                color="#636161"
              >
                5.75 GB
              </Text>
              <Center w="100%" color="#636161">
                Used data
              </Center>
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
