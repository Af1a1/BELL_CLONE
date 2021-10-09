import * as React from 'react';
import {
  NativeBaseProvider,
  Text,
  Button,
  Image,
  Box,
  ScrollView,
  HStack,
  Stack,
  Flex,
  Spacer,
  VStack,
} from 'native-base';
import theme from '../config/theme';
import Card from './shared/Card';
import CommonButton from './shared/CommonButton';
import { View, StyleSheet } from 'react-native';
import { borderRadius, fontStyle, maxWidth, minHeight } from 'styled-system';
import center from 'native-base/src/theme/components/center';
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Fontisto,
} from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <NativeBaseProvider theme={theme}>
      <HStack>
        <Text
          style={{
            marginTop: 16,
            marginLeft: 8,
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
            lineHeight: 19,
            fontStyle: 'normal',
          }}>
          Connected
        </Text>
        <Image
          style={{
            width: 14,
            height: 14,
            marginTop: 19,
            marginLeft: 7,
            marginBottom: 'auto',
          }}
          source={require('../assets/active.png')}
        />
      </HStack>

      <ScrollView
        w={{
          base: '100%',
          md: '100%',
        }}
        style={{ marginTop: 15 }}>
        <ScrollView
          horizontal={true}
          h={{
            base: '100%',
            md: '100%',
          }}>
          <Image
            style={{ width: 265, height: 135, borderRadius: 15, margin: 10 }}
            source={require('../assets/promo.svg')}
          />
          <Image
            style={{ width: 265, height: 135, borderRadius: 15, margin: 10 }}
            source={require('../assets/promo.svg')}
          />
        </ScrollView>

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
                <Box>
                  <Flex
                    direction='row'
                    bg={theme.colors.primary.default}
                    style={styles.card}
                    mb={2}>
                    <Box>
                      <Text style={styles.text} fontSize='md'>
                        Free Data
                      </Text>
                      <Text style={styles.text} fontSize='2xl' bold>
                        31.56 GB
                      </Text>
                      <Text style={styles.text} fontSize='xs'>
                        Valid until 01/10/2021 12:00 AM
                      </Text>
                    </Box>
                    <Spacer />
                    <Flex direction='column' align='center' justify='center'>
                      <Fontisto name='night-clear' size={24} color='white' />
                      <Spacer />
                      <MaterialIcons
                        name='arrow-forward-ios'
                        size={32}
                        color='white'
                      />
                    </Flex>
                  </Flex>
                  <Flex
                    direction='row'
                    bg={theme.colors.primary.default}
                    style={styles.card}>
                    <Box>
                      <Text style={styles.text} fontSize='md'>
                        Standard Data
                      </Text>
                      <Text style={styles.text} fontSize='2xl' bold>
                        31.56 GB
                      </Text>
                      <Text style={styles.text} fontSize='xs'>
                        Valid until 01/10/2021 12:00 AM
                      </Text>
                    </Box>
                    <Spacer />
                    <Flex direction='column' align='center' justify='center'>
                      <Fontisto name='day-sunny' size={32} color='white' />
                      <Spacer />
                      <MaterialIcons
                        name='arrow-forward-ios'
                        size={32}
                        color='white'
                      />
                    </Flex>
                  </Flex>
                </Box>
                <Flex direction='row'>
                  <Button
                    size='sm'
                    my='3'
                    variant='link'
                    colorScheme={'default'}
                    onPress={() => navigation.navigate('Usage History')}>
                    <Text
                      bold
                      style={{
                        color: '#283D87',
                        fontStyle: 'bold',
                        fontStyle: 'underline',
                      }}>
                      {' '}
                      History
                    </Text>
                  </Button>

                  {/* <CommonButton
                    navigation={navigation}
                    text='Extra Data'
                    route='Data Usage'
                  /> */}
                  <Button
                    style={styles.btnExtra}
                    onPress={() => navigation.navigate('Data Usage')}>
                    <Text style={styles.btnText}>Extra Data</Text>
                  </Button>
                </Flex>
              </Box>
            </Stack>
          </ScrollView>
        </Card>

        <Box style={styles.mainCard} mt={5}>
          <View style={styles.container}>
            <HStack style={{ width: '100%' }}>
              <VStack>
                <Text
                  style={{
                    marginTop: 11.94,
                    marginLeft: 8,
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#57534e',
                    lineHeight: 18,
                    fontStyle: 'normal',
                  }}>
                  Billing info
                </Text>
                <Text
                  style={{
                    marginTop: 8.95,
                    marginLeft: 8,
                    fontSize: 12,
                    fontWeight: 500,
                    color: '#57534e',
                    lineHeight: 14,
                    fontStyle: 'normal',
                  }}>
                  Your Current Bill amount
                </Text>
                <Text
                  style={{
                    marginLeft: 8,
                    fontSize: 10,
                    fontWeight: 'normal',
                    color: '#57534e',
                    lineHeight: 12,
                    fontStyle: 'normal',
                  }}>
                  Due Date 01/10/2021
                </Text>
              </VStack>
              <Image
                style={{
                  width: 35,
                  height: 35,
                  marginLeft: 'auto',
                  marginRight: 24,
                  marginTop: 14.71,
                }}
                source={require('../assets/bill.png')}
              />
            </HStack>
            <View
              style={{ display: 'flex', flexDirection: 'row', marginTop: 35 }}>
              <Button
                style={{
                  backgroundColor: 'none',
                  marginRight: 129,
                  marginBottom: 10,
                  marginTop: 'auto',
                  marginLeft: 24,
                }}
                onPress={() => navigation.navigate('Payment History')}>
                {' '}
                <Text
                  bold
                  style={{
                    color: '#283D87',
                    fontStyle: 'bold',
                    fontStyle: 'underline',
                  }}>
                  {' '}
                  History
                </Text>
              </Button>
              <Button
                style={styles.btn}
                onPress={() => navigation.navigate('Card Details')}>
                <Text style={styles.btnText}>Pay Now</Text>
              </Button>
              {/* <CommonButton
              navigation={navigation}
              style={{ marginRight: 20 }}
              text='Pay Now'
              route='Payment'
            /> */}
            </View>
          </View>
        </Box>

        <Box mt={4} style={styles.mainCard}>
          <View style={styles.addOn}>
            <HStack style={{ width: '100%' }}>
              <VStack>
                <Text
                  style={{
                    marginTop: 11.94,
                    marginLeft: 8,
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#57534e',
                    lineHeight: 18,
                    fontStyle: 'normal',
                  }}>
                  Add-on Packages
                </Text>

                <Text
                  style={{
                    marginLeft: 8,
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: '#57534e',
                    lineHeight: 12,
                    fontStyle: 'normal',
                    width: 170,
                    marginTop: 6.86,
                  }}>
                  Initiative to support work and study plans for virtual
                  platforms
                </Text>
              </VStack>
              <Image
                style={{
                  width: 35,
                  height: 35,
                  marginLeft: 'auto',
                  marginRight: 24,
                  marginTop: 14.71,
                }}
                source={require('../assets/plus.png')}
              />
            </HStack>

            <Button style={styles.btn}>
              <Text style={styles.btnText}>Activate Now</Text>
            </Button>
            {/* <CommonButton
              navigation={navigation}
              style={{ marginRight: 20 }}
              text='Pay Now'
              route='Payment'
            /> */}
          </View>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
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
    transform: 'matrix(1, 0, 0, 1, 0, 0)',
  },
  btnText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
    color: '#F9F9F9',
  },
  btn: {
    width: 106,
    height: 34,
    marginLeft: 'auto',
    marginRight: 20,
    marginTop: 'auto',
    marginBottom: 10.41,
    backgroundImage: 'linear-gradient(90deg, #283D87 3.87%, #5373E5 97.42%)',
    borderRadius: '15.5px',
    transform: 'rotate(-0.09deg)',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.25)',
  },
  btnExtra: {
    width: 158,
    height: 34,
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 10.41,
    backgroundImage: 'linear-gradient(90deg, #283D87 3.87%, #5373E5 97.42%)',
    borderRadius: '15.5px',
    transform: 'rotate(-0.09deg)',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.25)',
  },
  container: {
    height: 172.12,
  },
  addOn: {
    height: 104.47,
  },
  card: {
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    boxShadow: '0px 5px 18px rgba(0, 0, 0, 0.25)',
    borderRadius: '14px',
  },
  text: {
    color: '#fff',
  },
});
