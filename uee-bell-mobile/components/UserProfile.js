import * as React from 'react';
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
} from 'native-base';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { maxWidth, minHeight } from 'styled-system';
import center from 'native-base/src/theme/components/center';

const UserProfile = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <ScrollView
        w={{
          base: '100%',
          md: '100%',
        }}>
        <Box style={styles.mainCard}>
          <View style={styles.container}>
            <View style={styles.topBar}></View>
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
                  style={[styles.text, { marginLeft: '30px' }]}
                  align='left'
                  textAlign='left'>
                  {' '}
                  sample@email.com
                </Text>
              </View>

              <Divider
                bg='#5373E5'
                thickness='10'
                orientation='vertical'
                style={{
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

              <Divider
                bg='#5373E5'
                thickness='10'
                orientation='vertical'
                style={{
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

              <Divider
                bg='#5373E5'
                thickness='10'
                orientation='vertical'
                style={{
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
                  style={[styles.text, { marginLeft: '30px' }]}
                  align='left'
                  textAlign='left'>
                  {' '}
                  011XXXXXX
                </Text>
              </View>

              <Divider
                bg='#5373E5'
                thickness='10'
                orientation='vertical'
                style={{
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
                  style={[styles.text, { marginLeft: '30px' }]}
                  align='left'
                  textAlign='left'>
                  {' '}
                  73737
                </Text>
              </View>

              <Divider
                bg='#5373E5'
                thickness='10'
                orientation='vertical'
                style={{
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
                  style={[styles.text, { marginLeft: '30px' }]}
                  align='left'
                  textAlign='left'>
                  {' '}
                  Family Max
                </Text>
              </View>

              <Divider
                bg='#5373E5'
                thickness='10'
                orientation='vertical'
                style={{
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
                  style={[styles.text, { marginLeft: '30px' }]}
                  align='left'
                  textAlign='left'>
                  {' '}
                  2021-01-28
                </Text>
              </View>

              <Divider
                bg='#5373E5'
                thickness='10'
                orientation='vertical'
                style={{
                  width: 'inherit',
                  marginLeft: '15px',
                  marginRight: '15px',
                }}
              />
            </View>
          </View>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '500px',
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
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '16px',
  },
  top: {
    marginTop: '38px',
  },
});

export default UserProfile;
