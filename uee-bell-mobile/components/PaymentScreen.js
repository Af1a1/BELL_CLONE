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
  Divider,
} from 'native-base';
import theme from '../config/theme';
import Card from './shared/Card';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import CommonButton from './shared/CommonButton';
import { useState } from 'react';

export default function PaymentScreen({ navigation }) {
  const [groupValue, setGroupValue] = useState([]);
  const [amount, setAmount] = useState('');

  const handleChange = (event) => setAmount(event.target.value);
  return (
    <NativeBaseProvider theme={theme}>
      <Card>
        <ScrollView
          w={{
            base: '100%',
            md: '100%',
          }}>
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
              <Text bold fontSize='sm' mb='4' align='right' textAlign='right'>
                Total Due{' '}
                <Text fontSize='sm' color='muted.500'>
                  Rs 1000
                </Text>
              </Text>
              <Text bold fontSize='sm'>
                Directory
              </Text>
              <Text fontSize='xs' color='muted.500' mb='4'>
                1234567890
              </Text>
              <FormControl mb='3' color={theme.colors.primary.dark}>
                <FormControl.Label>Amount</FormControl.Label>
                <Input
                  placeholder='Enter Your Amount'
                  name='amount'
                  onChange={handleChange}
                  value={amount}
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name='money' />}
                      size={5}
                      ml='2'
                      color='muted.400'
                    />
                  }
                  _focus={{
                    border: `1.5px solid ${theme.colors.primary.dark}`,
                  }}
                />
              </FormControl>
              <Checkbox.Group
                mt='2'
                colorScheme='green'
                accessibilityLabel='choose multiple items'
                onChange={(values) => {
                  setGroupValue(values || []);
                }}
                alignItems='flex-start'>
                <Checkbox
                  colorScheme={theme.colors.primary.default}
                  _checked={{ backgroundColor: theme.colors.primary.dark }}
                  value='Visa'
                  size='sm'
                  my='1'
                  mr='3'
                  outlineColor={theme.colors.primary.default}>
                  <Icon
                    as={<MaterialCommunityIcons name='credit-card' />}
                    size={5}
                    px='2'
                    color={theme.colors.primary.dark}
                  />{' '}
                  <Text fontSize='sm'>Visa</Text>
                </Checkbox>
                <Checkbox
                  value='Amex'
                  my='1'
                  colorScheme={theme.colors.primary.default}
                  _checked={{ backgroundColor: theme.colors.primary.dark }}>
                  <Icon
                    as={<MaterialCommunityIcons name='id-card' />}
                    size={5}
                    px='2'
                    color={theme.colors.primary.dark}
                  />{' '}
                  <Text fontSize='sm'>Amex</Text>
                </Checkbox>
              </Checkbox.Group>
              <Box
                my='3'
                p='5'
                backgroundColor='muted.200'
                rounded='xl'
                _text={{
                  fontSize: 'md',
                  fontWeight: 'medium',
                  color: 'warmGray.50',
                  textAlign: 'left',
                }}>
                <Text fontSize='sm' bold mb='3'>
                  Total Amount
                </Text>
                <Text fontSize='sm'>Rs {amount}</Text>
              </Box>
              <CommonButton
                navigation={navigation}
                text='Pay Now'
                route='Payment History'
              />
            </Box>
          </Stack>
        </ScrollView>
      </Card>
    </NativeBaseProvider>
  );
}
