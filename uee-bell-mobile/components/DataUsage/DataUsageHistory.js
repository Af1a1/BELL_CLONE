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
  CheckIcon,
  Center,
  List,
  Select,
} from 'native-base';
import theme from '../../config/theme';
import Card from '../shared/Card';
import { useState } from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';

export default function DataUsageHistory({ navigation }) {
  const [groupValue, setGroupValue] = useState([]);

  const dataHistory = [
    {
      date: '06/10/2021',
      packages: [
        { packageName: 'Day Time', data: '500 MB' },
        { packageName: 'Day Time', data: '1.35 GB' },
      ],
    },
    {
      date: '05/10/2021',
      packages: [
        { packageName: 'Day Time', data: '500 MB' },
        { packageName: 'Day Time', data: '1.35 GB' },
      ],
    },
    {
      date: '04/10/2021',
      packages: [
        { packageName: 'Day Time', data: '500 MB' },
        { packageName: 'Day Time', data: '1.35 GB' },
      ],
    },
    {
      date: '03/10/2021',
      packages: [
        { packageName: 'Day Time', data: '500 MB' },
        { packageName: 'Day Time', data: '1.35 GB' },
      ],
    },
    {
      date: '02/10/2021',
      packages: [
        { packageName: 'Day Time', data: '500 MB' },
        { packageName: 'Day Time', data: '1.35 GB' },
      ],
    },
    {
      date: '01/10/2021',
      packages: [
        { packageName: 'Day Time', data: '500 MB' },
        { packageName: 'Day Time', data: '1.35 GB' },
      ],
    },
  ];

  return (
    <NativeBaseProvider theme={theme}>
      <ScrollView
        w={{
          base: '100%',
          md: '100%',
        }}
        bg="#fff"
      >
        <VStack space={4} alignItems="center">
          <Box w="100%">
            <Flex direction="row" mx={3} mt={2}>
              <Spacer />
              <Box>
                <Select
                  selectedValue={'daily'}
                  // minWidth="50"
                  width="190"
                  accessibilityLabel="Choose Time Period"
                  placeholder="Choose Time Period"
                  _selectedItem={{
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) => {}}
                >
                  <Select.Item label="Daily" value="daily" />
                  <Select.Item label="Weekly" value="weekly" />
                  <Select.Item label="Monthly" value="mothly" />
                </Select>
              </Box>
            </Flex>
            <Center width="100%">
              <List 
                borderWidth={0}
                borderRightWidth={0}
                w="100%"
                p={1}
                pr={3}
              >
                {dataHistory.map((data, index) => (
                  <List.Item key={index} w="100%" mr={2}>
                    <Card width="100%" margin="0">
                      <Text bold fontSize="md">
                        Date: 01/10/2021
                      </Text>
                      <Flex w="100%" direction="row" px={2}>
                        <Text fontSize="sm">Day Time </Text>
                        <Spacer />
                        <Text bold fontSize="sm">
                          1.5 GB
                        </Text>
                      </Flex>
                      <Flex w="100%" direction="row" px={2}>
                        <Text fontSize="sm">Day Time </Text>
                        <Spacer />
                        <Text bold fontSize="sm">
                          1.5 GB
                        </Text>
                      </Flex>
                    </Card>
                  </List.Item>
                ))}
              </List>
            </Center>
          </Box>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
}
