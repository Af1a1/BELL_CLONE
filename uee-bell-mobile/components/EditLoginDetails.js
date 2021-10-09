import React, { useState } from 'react';
import theme from '../config/theme';
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
  Divider,
  Image,
  Button,
} from 'native-base';
import { Alert, Modal, StyleSheet, View, Pressable } from 'react-native';
import { borderRadius, maxWidth, minHeight } from 'styled-system';
import center from 'native-base/src/theme/components/center';

const EditLoginDetails = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Box style={styles.mainCard}>
        <View style={styles.loginCard}>
          <View style={styles.loginHeader}>
            <Text
              style={styles.loginHeaderText}
              align='center'
              textAlign='center'>
              Login Details
            </Text>
          </View>
          <Stack
            space={2.5}
            alignSelf='center'
            px='4'
            safeArea
            mt='6'
            w={{
              base: '100%',
              md: '25%',
            }}>
            <FormControl mb='3' color={theme.colors.primary.dark}>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                name='email'
                _focus={{ border: `1.5px solid ${theme.colors.primary.dark}` }}
                value={'sample@email.com'}
              />
            </FormControl>

            <FormControl mb='3' color={theme.colors.primary.dark}>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                name='password'
                _focus={{ border: `1.5px solid ${theme.colors.primary.dark}` }}
                value={'*******'}
              />
            </FormControl>

            <FormControl mb='3' color={theme.colors.primary.dark}>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input
                name='confirmPassword'
                _focus={{ border: `1.5px solid ${theme.colors.primary.dark}` }}
                value={'*******'}
              />
            </FormControl>

            <Button style={styles.btn}>
              <Text style={styles.btnText}>Save Details</Text>
            </Button>
          </Stack>
        </View>
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '520px',
  },
  topBar: {
    height: '120px',
    backgroundColor: '#5373E5',
    borderTopRightRadius: '14px',
    borderTopLeftRadius: '14px',
  },
  mainCard: {
    padding: 0,
    margin: 10,
    width: maxWidth,
    height: minHeight,
    alignItems: center,
    justifyContent: center,
    background: '#FFFFFF',
    boxShadow: '0px 5px 18px rgba(0, 0, 0, 0.25)',
    borderRadius: '14px',
    marginTop: 'auto',
    marginBottom: 'auto',
    transform: 'matrix(1, 0, 0, 1, 0, 0)',
  },
  text: {
    color: '#5373E5',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '16px',
  },
  top: {
    marginTop: 13,
  },
  btnText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '16px',
    textAlign: 'center',

    color: '#F9F9F9',
  },
  btn: {
    width: '256.95px',
    height: '38.43px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 13,
    marginBottom: 30,
    backgroundImage: 'linear-gradient(90deg, #283D87 3.87%, #5373E5 97.42%)',
    borderRadius: '15.5px',
    transform: 'rotate(-0.09deg)',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.25)',
  },
  loginCard: {
    height: '100%',
  },
  loginHeader: {
    height: 88,
    backgroundColor: '#5373E5',
    borderTopRightRadius: '14px',
    borderTopLeftRadius: '14px',
  },
  loginHeaderText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '21px',
    color: '#FFFFFF',
    transform: 'matrix(1, 0, 0, 1, 0, 0)',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default EditLoginDetails;
