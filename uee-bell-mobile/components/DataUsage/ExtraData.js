import * as React from 'react';
import {
  Box,
  NativeBaseProvider,
  ScrollView,
  Text,
  VStack,
  Flex,
  Spacer,
  Center,
  Slider,
  Button,
  Modal,
} from 'native-base';
import { StyleSheet } from 'react-native';
import { flex, right } from 'styled-system';
import theme from '../../config/theme';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function DataUsage({ navigation }) {
  const [groupValue, setGroupValue] = useState([]);
  const [onChangeEndValue, setOnChangeEndValue] = useState(12.5);
  const [dataAmount, setDataAmount] = useState(1);
  const [price, setPrice] = useState(100);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

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
              value={onChangeEndValue}
              defaultValue={onChangeEndValue}
              colorScheme="blue"
              onChange={(v) => {
                setOnChangeEndValue(Math.floor(v));
              }}
              onChangeEnd={(v) => {
                let val;
                if (Math.floor(v) < 12.5) val = 12.5;
                else if (Math.floor(v) < 25) val = 25;
                else if (Math.floor(v) < 37.5) val = 37.5;
                else if (Math.floor(v) < 50) val = 50;
                else if (Math.floor(v) < 62.5) val = 62.5;
                else if (Math.floor(v) < 75) val = 75;
                else if (Math.floor(v) < 87.5) val = 87.5;
                else val = 100;
                setOnChangeEndValue(val);

                switch (val) {
                  case 12.5:
                    setDataAmount(1);
                    setPrice(100);
                    break;
                  case 25:
                    setDataAmount(2);
                    setPrice(200);
                    break;
                  case 37.5:
                    setDataAmount(4);
                    setPrice(300);
                    break;
                  case 50:
                    setDataAmount(5);
                    setPrice(400);
                    break;
                  case 62.5:
                    setDataAmount(10);
                    setPrice(500);
                    break;
                  case 75:
                    setDataAmount(15);
                    setPrice(600);
                    break;
                  case 87.5:
                    setDataAmount(20);
                    setPrice(700);
                    break;
                  default:
                    setDataAmount(25);
                    setPrice(800);
                    break;
                }
              }}
            >
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
            <Flex w="100%" align="center" direction="row" w="100%">
              <Text>GB</Text>
              <Spacer />
              <Text>1</Text>
              <Spacer />
              <Text>2</Text>
              <Spacer />
              <Text>4</Text>
              <Spacer />
              <Text>5</Text>
              <Spacer />
              <Text>10</Text>
              <Spacer />
              <Text>15</Text>
              <Spacer />
              <Text>20</Text>
              <Spacer />
              <Text>25</Text>
            </Flex>
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
                {dataAmount} GB
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
                  Rs. {price}
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
              <Text bold color={theme.colors.primary.dark}>
                Cancle
              </Text>
            </Button>
            <Spacer />
            <Button
              my="3"
              style={styles.success}
              // onPress={() => navigation.navigate(route)}
              onPress={() => {
                setShowModal(true);
              }}
            >
              Add
            </Button>
          </Flex>
        </VStack>
      </ScrollView>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Add Extra Data</Modal.Header>
          <Modal.Body>
            Are you sure you want to Add this Extra Data ?
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={5}>
              <Button
                style={styles.buttonCancle}
                variant="outline"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <Text bold color={theme.colors.primary.dark}>
                  No
                </Text>
              </Button>
              <Button
                style={styles.button}
                onPress={() => {
                  setShowModal(false);
                  setShowModal2(true);
                }}
              >
                Yes
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Modal isOpen={showModal2} onClose={() => setShowModal2(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Added Successfully</Modal.Header>
          <Modal.Body>
            Your have been Successfully Added new Extra Data
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={5}>
              <Button
                style={styles.button}
                onPress={() => {
                  setShowModal2(false);
                  navigation.goBack();
                }}
              >
                Ok
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
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
  button: {
    float: right,
    align: right,
    display: flex,
    padding: 10,
    backgroundImage: 'linear-gradient(90deg, #283D87 3.87%, #5373E5 97.42%)',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
    transform: 'matrix(1, 0, 0, 1, 0, 0)',
  },
  buttonCancle: {
    float: right,
    align: right,
    display: flex,
    borderRadius: '20px',
    padding: 10,
    borderColor: theme.colors.primary.dark,
  },
});
