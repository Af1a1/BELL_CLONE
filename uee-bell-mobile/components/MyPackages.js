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
} from 'native-base';
import theme from '../config/theme';
import { useState } from 'react';
export default function MyPackages() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  return (
    <NativeBaseProvider theme={theme}>
      <>
        <Box
          bg={theme.colors.primary.default}
          m='3'
          rounded='xl'
          _text={{
            fontWeight: 'medium',
            letterSpacing: 'lg',
          }}>
          <Stack pl='4' space={2}>
            <Flex direction='row'>
              <Flex direction='column'>
                <Text
                  fontWeight='300'
                  color='white'
                  fontSize='md'
                  ml='-0.5'
                  mt='1'>
                  Home Schooling & WFH
                </Text>
                <Text fontWeight='300' color='white' ml='-0.5' mb='1'>
                  13.5 GB Remaining
                </Text>
                <Text fontWeight='300' color='white' ml='-0.5' mb='1'>
                  7 d 2 hours more
                </Text>
              </Flex>
              <Button
                borderRightRadius={10}
                position='right'
                ml='130'
                px='5'
                py='8.5'
                onPress={() => setShowModal(true)}
                bg={theme.colors.primary.dark}>
                <Text color='white'>Deactivate</Text>
              </Button>
            </Flex>
          </Stack>
        </Box>
        <Box position='relative' h={100} w='100%'>
          <Fab
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
                  bg={theme.colors.primary.default}
                  color='white'
                  onPress={() => {
                    setShowModal(false);
                  }}>
                  Cancel
                </Button>
                <Button
                  bg={theme.colors.primary.default}
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
                  bg={theme.colors.primary.default}
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
