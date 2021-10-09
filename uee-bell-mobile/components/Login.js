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
  Spacer,
  Flex,
  View,
  Image,
  Button,
} from 'native-base';
import theme from '../config/theme';
import Card from './shared/Card';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
export default function Login({ navigation }) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [groupValue, setGroupValue] = useState([]);

  return (
    <NativeBaseProvider theme={theme}>
      <Stack
        space={2.5}
        alignSelf='center'
        px='4'
        safeArea
        mt='4'
        w={{
          base: '100%',
          md: '25%',
        }}>
        <Box>
          <Image
            style={{
              width: 190,
              height: 70,
              marginLeft: '25%',
              marginTop: '50%',
              marginBottom: 15,
            }}
            source={require('../assets/lankabell.png')}
          />
          <FormControl mb='3' color={theme.colors.primary.dark}>
            <FormControl.Label>Username</FormControl.Label>
            <Input
              placeholder='Enter Username'
              name='username'
              //   InputLeftElement={
              //     <Icon
              //       as={<MaterialIcons name='credit-card' />}
              //       size={5}
              //       ml='2'
              //       color='muted.400'
              //     />
              //   }
              _focus={{
                border: `1.5px solid ${theme.colors.primary.dark}`,
              }}
            />
            <FormControl.Label>Password</FormControl.Label>
            <Input
              placeholder='Enter Password'
              type='password'
              name='password'
              isRequired='true'
              //   InputLeftElement={
              //     <Icon
              //       as={<MaterialIcons name='credit-card' />}
              //       size={5}
              //       ml='2'
              //       color='muted.400'
              //     />
              //   }
              _focus={{
                border: `1.5px solid ${theme.colors.primary.dark}`,
              }}
            />

            <Button
              type='submit'
              style={styles.btn}
              onPress={() => navigation.navigate('Footer')}>
              <Text style={styles.btnText}>Login</Text>
            </Button>
          </FormControl>
        </Box>
      </Stack>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  btnText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '16px',
    textAlign: 'center',

    color: '#F9F9F9',
  },
  btn: {
    width: '100%',
    height: '38.43px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '31px',
    backgroundImage:
      'linear-gradient(90deg, rgb(46 49 146) 97.42%, rgb(46 49 146) 97.42%)',
    borderRadius: '8px',
    transform: 'rotate(-0.09deg)',
  },
});
