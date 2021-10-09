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
  Slider,
  Button,
} from 'native-base';
import { StyleSheet } from 'react-native';
import { flex, right } from 'styled-system';
import theme from '../../config/theme';
import CommonButton from '../shared/CommonButton';
import Card from '../shared/Card';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import CircularProgress from 'react-native-circular-progress-indicator';

export default function DataUsage({ navigation }) {
  const [groupValue, setGroupValue] = useState([]);
  const [onChangeValue, setOnChangeValue] = useState(70);
  const [onChangeEndValue, setOnChangeEndValue] = useState(70);

  return (
    <NativeBaseProvider theme={theme}>
      <ScrollView
        w={{
          base: '100%',
          md: '100%',
        }}
      >
        <VStack space={4} alignItems="center">
          <Text bold fontSize="lg" w="100%" p={5} px={7}>
            Selecte Your extra data
          </Text>
          <Flex w="100%" p="5" px={7} align="center" justify="center" w="100%">
            <Slider
              defaultValue={70}
              colorScheme="cyan"
              onChange={(v) => {
                setOnChangeValue(Math.floor(v));
              }}
              onChangeEnd={(v) => {
                v && setOnChangeEndValue(Math.floor(v));
              }}
            >
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
          </Flex>
          <Spacer />
          <Flex
            w="100%"
            direction="row"
            p="5"
            px={7}
            align="center"
            justify="center"
          >
            <Spacer />
            <Flex direction="column" align="center" justify="center">
              <Text
                w="100%"
                bold
                fontSize="3xl"
                color={theme.colors.primary.dark}
                // lineHeight="xs"
              >
                4 GB
              </Text>
              <Center w="100%">
                <Text fontSize="sm" color={theme.colors.primary.dark}>
                  Data
                </Text>
              </Center>
            </Flex>
            <Spacer />
            <AntDesign name="arrowright" size={48} color="black" />
            <Spacer />
            <Flex direction="column" align="center" justify="center">
              <Center w="100%">
                <Text
                  bold
                  fontSize="3xl"
                  w="100%"
                  color={theme.colors.primary.default}
                  // lineHeight="xs"
                  align="center"
                >
                  Rs. 400
                </Text>
              </Center>
              <Center w="100%">
                <Text fontSize="sm" color={theme.colors.primary.default}>
                  Price
                </Text>
              </Center>
            </Flex>
            <Spacer />
          </Flex>
          <Box p={5}>
            <Text>
              <Text bold>Note</Text>
              <Text> : Above charges are excluding government taxes</Text>
            </Text>
          </Box>
          <Flex direction="row" w="100%" p={5} px={7}>
            <Button
              my="3"
              style={styles.cancle}
              variant="outline"
              onPress={() => navigation.goBack()}
              colorScheme="blue"
            >
              <Text bold color={theme.colors.primary.dark}>Cancle</Text>
            </Button>
            <Spacer />
            <Button
              my="3"
              style={styles.success}
              // onPress={() => navigation.navigate(route)}
            >
              Add
            </Button>
          </Flex>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  cancle: {
    padding: 10,
    borderRadius: '20px',
    width: '140px',
    borderColor: theme.colors.primary.dark,
  },
  success: {
    width: '140px',
    float: right,
    align: right,
    display: flex,
    padding: 10,
    backgroundImage: 'linear-gradient(90deg, #283D87 3.87%, #5373E5 97.42%)',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
    transform: 'matrix(1, 0, 0, 1, 0, 0)',
  },
});
