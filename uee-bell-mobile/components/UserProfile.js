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
import CommonButton from './shared/CommonButton';
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';

const UserProfile = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <NativeBaseProvider theme={theme}>
      <ScrollView
        w={{
          base: '100%',
          md: '100%',
        }}>
        <Box style={styles.mainCard}>
          <View style={styles.container}>
            <View
              style={[
                styles.topBar,
                { display: 'flex', flexDirection: 'row' },
              ]}>
              <MaterialCommunityIcons
                style={{ marginTop: '80px', marginLeft: '44px' }}
                name='camera'
                size='20px'
                color='white'
              />
              <Image
                style={{
                  borderRadius: '50%',
                  border: 'solid',
                  borderColor: 'white',
                  marginTop: 'auto',
                  marginBottom: 'auto',
                }}
                size='md'
                resizeMode='cover'
                source={require('../assets/profile.jpg')}
              />
              <View
                style={{
                  width: '40%',
                  marginLeft: '30px',
                  marginRight: '30px',
                }}>
                <Text
                  align='center'
                  textAlign='center'
                  style={[styles.names, { marginTop: '35.5px' }]}>
                  Jane
                </Text>
                <View
                  style={{
                    borderBottomColor: '#F9F9F9',
                    borderBottomWidth: 1,
                    width: '100%',
                    marginTop: '8px',
                    marginBottom: '5px',
                  }}
                />
                <Text textAlign='center' style={styles.names}>
                  Anderson
                </Text>
              </View>
            </View>
            <View>
              <View
                style={[
                  styles.top,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: '20px',
                    marginBottom: '9px',
                  },
                ]}>
                <Text style={styles.text} align='left' textAlign='left'>
                  {' '}
                  Email:
                </Text>
                <Text
                  style={[styles.text, { marginLeft: '106px' }]}
                  align='left'
                  textAlign='left'>
                  {' '}
                  sample@email.com
                </Text>
              </View>
              {/* 
              <Divider
                bg='#5373E5'
                thickness='10'
                orientation='vertical'
                style={{
                  width: 'inherit',
                  marginLeft: '15px',
                  marginRight: '15px',
                }}
              /> */}

              <View
                style={{
                  borderBottomColor: '#5373E5',
                  borderBottomWidth: 1,
                  width: 'inherit',
                  marginLeft: '15px',
                  marginRight: '15px',
                }}
              />
              <View
                style={[
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: '20px',
                    marginBottom: '9px',
                    marginTop: '11px',
                  },
                ]}>
                <Text style={styles.text} align='left' textAlign='left'>
                  {' '}
                  Mobile Number: :
                </Text>
                <Text
                  style={[styles.text, { marginLeft: '30px' }]}
                  align='left'
                  textAlign='left'>
                  {' '}
                  077XXXXXX
                </Text>
              </View>

              <View
                style={{
                  borderBottomColor: '#5373E5',
                  borderBottomWidth: 1,
                  width: 'inherit',
                  marginLeft: '15px',
                  marginRight: '15px',
                }}
              />
              <View
                style={[
                  {
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '20px',
                    marginBottom: '9px',
                    marginTop: '11px',
                  },
                ]}>
                <Text style={styles.text} align='left' textAlign='left'>
                  {' '}
                  Address:
                </Text>
                <Text
                  style={[styles.text, { marginTop: '10px' }]}
                  textAlign='left'
                  align='left'>
                  {' '}
                  Cecilia Chapman, 711-2880 Nulla St. Mankato
                </Text>
              </View>

              <View
                style={{
                  borderBottomColor: '#5373E5',
                  borderBottomWidth: 1,
                  width: 'inherit',
                  marginLeft: '15px',
                  marginRight: '15px',
                }}
              />
              <View
                style={[
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: '20px',
                    marginBottom: '9px',
                    marginTop: '11px',
                  },
                ]}>
                <Text style={styles.text} align='left' textAlign='left'>
                  {' '}
                  Directory Number:
                </Text>
                <Text
                  style={[styles.text, { marginLeft: '24px' }]}
                  align='left'
                  textAlign='left'>
                  {' '}
                  011XXXXXX
                </Text>
              </View>

              <View
                style={{
                  borderBottomColor: '#5373E5',
                  borderBottomWidth: 1,
                  width: 'inherit',
                  marginLeft: '15px',
                  marginRight: '15px',
                }}
              />
              <View
                style={[
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: '20px',
                    marginBottom: '9px',
                    marginTop: '11px',
                  },
                ]}>
                <Text style={styles.text} align='left' textAlign='left'>
                  {' '}
                  Account Number:
                </Text>
                <Text
                  style={[styles.text, { marginLeft: '31px' }]}
                  align='left'
                  textAlign='left'>
                  {' '}
                  73737
                </Text>
              </View>
              <View
                style={{
                  borderBottomColor: '#5373E5',
                  borderBottomWidth: 1,
                  width: 'inherit',
                  marginLeft: '15px',
                  marginRight: '15px',
                }}
              />

              <View
                style={[
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: '20px',
                    marginBottom: '9px',
                    marginTop: '11px',
                  },
                ]}>
                <Text style={styles.text} align='left' textAlign='left'>
                  {' '}
                  Active Package:
                </Text>
                <Text
                  style={[styles.text, { marginLeft: '45px' }]}
                  align='left'
                  textAlign='left'>
                  {' '}
                  Family Max
                </Text>
              </View>

              <View
                style={{
                  borderBottomColor: '#5373E5',
                  borderBottomWidth: 1,
                  width: 'inherit',
                  marginLeft: '15px',
                  marginRight: '15px',
                }}
              />
              <View
                style={[
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: '20px',
                    marginBottom: '9px',
                    marginTop: '11px',
                  },
                ]}>
                <Text style={styles.text} align='left' textAlign='left'>
                  {' '}
                  Next Bill:
                </Text>
                <Text
                  style={[styles.text, { marginLeft: '88px' }]}
                  align='left'
                  textAlign='left'>
                  {' '}
                  2021-01-28
                </Text>
              </View>

              <View
                style={{
                  borderBottomColor: '#5373E5',
                  borderBottomWidth: 1,
                  width: 'inherit',
                  marginLeft: '15px',
                  marginRight: '15px',
                }}
              />

              <Button
                style={styles.btn}
                onPress={() => navigation.navigate('Edit User Profile')}>
                <Text style={styles.btnText}>Edit Profile</Text>
              </Button>
            </View>
          </View>
        </Box>

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
            <View>
              <View
                style={[
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: '20px',
                    marginBottom: '8.23px',
                    marginTop: '36.6px',
                  },
                ]}>
                <Text style={styles.text} align='left' textAlign='left'>
                  {' '}
                  Email:
                </Text>
                <Text
                  style={[styles.text, { marginLeft: '57px' }]}
                  align='left'
                  textAlign='left'>
                  {' '}
                  sample@email.com
                </Text>
              </View>

              <View
                style={{
                  borderBottomColor: '#5373E5',
                  borderBottomWidth: 1,
                  width: 'inherit',
                  marginLeft: '15px',
                  marginRight: '15px',
                }}
              />
              <View
                style={[
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: '20px',
                    marginBottom: '8.23px',
                    marginTop: '19.03px',
                  },
                ]}>
                <Text style={styles.text} align='left' textAlign='left'>
                  {' '}
                  Password:
                </Text>
                <Text
                  style={[styles.text, { marginLeft: '30px' }]}
                  align='left'
                  textAlign='left'>
                  {' '}
                  ***********
                </Text>
              </View>

              <View
                style={{
                  borderBottomColor: '#5373E5',
                  borderBottomWidth: 1,
                  width: 'inherit',
                  marginLeft: '15px',
                  marginRight: '15px',
                }}
              />

              <Button
                style={styles.btn}
                onPress={() => navigation.navigate('Edit Login Details')}>
                <Text style={styles.btnText}>Change Password</Text>
              </Button>
            </View>
          </View>
        </Box>
      </ScrollView>
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
    marginTop: '38px',
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
    marginTop: '31px',
    backgroundImage: 'linear-gradient(90deg, #283D87 3.87%, #5373E5 97.42%)',
    borderRadius: '15.5px',
    transform: 'rotate(-0.09deg)',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.25)',
  },
  loginCard: {
    height: '269px',
  },
  loginHeader: {
    height: '63.96px',
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
  names: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '21px',
    color: '#FFFFFF',
  },
});

export default UserProfile;
