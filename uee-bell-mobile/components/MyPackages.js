import * as React from 'react';
import {
  Box,
  Center,
  Stack,
  Flex,
  Heading,
  Text,
  Icon,
  AddIcon,
  Fab,
  Button,
  NativeBaseProvider,
  Modal,
  FormControl,
  Spacer,
} from 'native-base';
import theme from '../config/theme';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { flex, right } from 'styled-system';
import CommonButton from './shared/CommonButton';
export default function MyPackages({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const data = [
    {
      name: 'Home Schooling & WFH',
      data: '13.5 GB Remaining',
      hours: '7 d 2 hours more',
    },
    {
      name: 'Messaging',
      data: '6.4 GB Remaining',
      hours: '10 d 8 hours more',
    },
    {
      name: 'YouTube',
      data: '7.0 GB Remaining',
      hours: '4 d 1 hours more',
    },
    {
      name: 'Gaming',
      data: '3.5 GB Remaining',
      hours: '6 d 1 hours more',
    },
  ];
  return (
    <NativeBaseProvider theme={theme}>
      <>
        {data.map((pack, index) => (
          <Box bg={theme.colors.primary.default} m='3' rounded='xl'>
            <Stack pl='4' space={2}>
              <Flex direction='row'>
                <Flex direction='column'>
                  <Text color='white' fontSize='md' ml='-0.5' mt='1'>
                    {pack.name}
                  </Text>
                  <Text color='white' ml='-0.5' mb='1'>
                    {pack.data}
                  </Text>
                  <Text color='white' ml='-0.5' mb='1'>
                    {pack.hours}
                  </Text>
                </Flex>
                <Spacer />
                <Button
                  borderRightRadius={10}
                  position='right'
                  px='5'
                  py='8.5'
                  onPress={() => setShowModal(true)}
                  bg={theme.colors.primary.dark}>
                  <Text color='white'>Deactivate</Text>
                </Button>
              </Flex>
            </Stack>
          </Box>
        ))}
        <Box position='relative' h={70} w='70%'>
          <Fab
            onPress={() => navigation.navigate('Add Package')}
            bg={theme.colors.primary.default}
            position='absolute'
            size='sm'
            icon={<AddIcon color='white' name='plus' />}
          />
        </Box>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth='400px'>
            <Modal.CloseButton />
            <Modal.Header>Deactivate Package</Modal.Header>
            <Modal.Body>
              Are you sure you want to deactivate this package ?
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={5}>
                <Button
                  style={styles.button}
                  onPress={() => {
                    setShowModal(false);
                  }}>
                  Cancel
                </Button>
                <Button
                  style={styles.button}
                  onPress={() => {
                    setShowModal(false);
                    setShowModal2(true);
                  }}>
                  Deactivate
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
        <Modal isOpen={showModal2} onClose={() => setShowModal2(false)}>
          <Modal.Content maxWidth='400px'>
            <Modal.CloseButton />
            <Modal.Header>Submitted Successfully</Modal.Header>
            <Modal.Body>
              A confirmation email has been sent to your
              mailbox(it19*****@gmail.com). Please check your email and confirm
              within 1 hour.
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={5}>
                <Button
                  style={styles.button}
                  onPress={() => {
                    setShowModal2(false);
                  }}>
                  Back
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
