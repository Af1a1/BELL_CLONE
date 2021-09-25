import * as React from 'react';
import {
  Box,
  Center,
  Stack,
  Flex,
  Heading,
  Text,
  AddIcon,
  Button,
  NativeBaseProvider,
  Modal,
  Spacer,
} from 'native-base';
import theme from '../config/theme';
import { StyleSheet } from 'react-native';
import { flex, right } from 'styled-system';
import { useState } from 'react';
export default function AddPackages({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <NativeBaseProvider theme={theme}>
      <>
        <Box
          bg={theme.colors.primary.default}
          m='3'
          p='1'
          rounded='xl'
          _text={{
            fontWeight: 'medium',
            letterSpacing: 'lg',
          }}>
          <Stack
            pl='4'
            space={2}
            onClick={() => {
              setShowModal(true);
            }}>
            <Text fontWeight='300' color='white' fontSize='s' ml='-0.5' mt='1'>
              Home Schooling & WFH
            </Text>
            <Flex direction='row'>
              <Text
                fontWeight='500'
                color='white'
                pl='4'
                fontSize='2xl'
                ml='-1'
                mr='5'>
                30 GB
              </Text>
              <Spacer />
              <Center>
                <AddIcon color='white' size='6' mr='5' />
              </Center>
            </Flex>
            <Flex direction='row'>
              <Text fontWeight='300' color='white' ml='-0.5' mb='1'>
                Meet Lite (Zoom, Teams, +)
              </Text>
              <Spacer />
              <Text
                fontWeight='300'
                placement='right'
                color='white'
                mr='5'
                mb='1'
                textAlign='right'>
                RS 190
              </Text>
            </Flex>
          </Stack>
        </Box>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth='400px'>
            <Modal.CloseButton />
            <Modal.Header>Activate Package</Modal.Header>
            <Modal.Body>
              Do you want to purchase and activate this package ?
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={5}>
                <Button
                  style={styles.button}
                  onPress={() => {
                    setShowModal(false);
                  }}>
                  Add to bill
                </Button>
                <Button
                  style={styles.button}
                  onPress={() => {
                    setShowModal(false);
                  }}>
                  Pay now
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 'auto',
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 'auto',
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
});
