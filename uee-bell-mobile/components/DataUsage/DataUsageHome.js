import React, { useState } from 'react';
import {
  Box,
  NativeBaseProvider,
  ScrollView,
  Stack,
  Flex,
  Text,
  Spacer,
  Button,
  List,
  Center,
  CircularProgress,
  Pressable
} from 'native-base';
import { StyleSheet } from 'react-native';
import { Fontisto, MaterialIcons } from '@expo/vector-icons';
import theme from '../../config/theme';
import Card from '../shared/Card';
import CommonButton from '../shared/CommonButton';

function DataUsageHome({ navigation }) {
  const [groupValue, setGroupValue] = useState([]);
  const [amount, setAmount] = useState('');

  const handleChange = (event) => setAmount(event.target.value);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'night-clear':
        return <Fontisto name="night-clear" size={24} color="white" />;
      default:
        return <Fontisto name="day-sunny" size={32} color="white" />;
    }
  };
  const packages = [
    {
      packageName: 'Day Time',
      remainingData: 31.56,
      remainingDataMetix: 'GB',
      validtoDateTime: '01/09/2021 12.00 AM',
      validFromDateTime: '01/10/2021 12.00 AM',
      iconName: 'day-sunny',
      total: 35,
      today: 1.76,
    },
    {
      packageName: 'Night Time',
      remainingData: 11.03,
      remainingDataMetix: 'GB',
      validtoDateTime: '01/09/2021 12.00 AM',
      validFromDateTime: '01/10/2021 12.00 AM',
      iconName: 'night-clear',
      total: 35,
      today: 0.80,
    },
  ];
  return (
    <NativeBaseProvider theme={theme}>
      <ScrollView
        w={{
          base: '100%',
          md: '100%',
        }}
      >
        <Center>
          <Stack
            space={2.5}
            alignSelf="center"
            px="4"
            safeArea
            mt="4"
            w={{
              base: '100%',
              md: '25%',
            }}
          >
            <Center p={5}>
              <Text fontSize="2xl" color="#283D87" mb={3}>
                Total Data Usage
              </Text>
              <CircularProgress
                mt={6}
                value={10}
                size={200}
                color="#5373E5"
                thickness={20}
                trackColor="#C4C4C4"
              >
                <Center>
                  <Text bold fontSize="sm" color="#283D87">
                    Total
                  </Text>
                  <Text bold fontSize="3xl" color="#283D87">
                    50 GB
                  </Text>
                </Center>
              </CircularProgress>
            </Center>
            <Box>
              <Box mb={5}>
                <List
                  p={0}
                  m={0}
                  // borderColor="red.200"
                  borderWidth={0}
                  borderRightWidth={0}
                  w="100%"
                >
                  {packages.map((packageItem, index) => (
                    <Pressable
                      key={index}
                      width="100%"
                      onPress={() =>
                        navigation.navigate('Data Usage', { packageItem })
                      }
                    >
                      <Flex
                        direction="row"
                        bg={theme.colors.primary.default}
                        style={styles.card}
                        width="100%"
                        mb={2}
                      >
                        <Box>
                          <Text style={styles.text} fontSize="md">
                            {packageItem.packageName}
                          </Text>
                          <Text style={styles.text} fontSize="2xl" bold>
                          {packageItem.remainingData}
                          </Text>
                          <Text style={styles.text} fontSize="xs">
                            Valid until {packageItem.validtoDateTime}
                          </Text>
                        </Box>
                        <Spacer />
                        <Flex
                          direction="column"
                          align="center"
                          justify="center"
                        >
                          {getIcon(packageItem.iconName)}
                          <Spacer />
                          <MaterialIcons
                            name="arrow-forward-ios"
                            size={32}
                            color="white"
                            
                          />
                        </Flex>
                      </Flex>
                    </Pressable>
                  ))}
                </List>
              </Box>
              <Flex direction="row" align="center" justify="center">
                <Spacer />
                <Button
                  my="3"
                  style={styles.cancle}
                  variant="outline"
                  onPress={() => navigation.navigate('Usage History')}
                  colorScheme="blue"
                >
                  <Text bold color={theme.colors.primary.dark}>
                  History
                  </Text>
                </Button>
                <Spacer />
                <Button
                  style={styles.btnExtra}
                  onPress={() => navigation.navigate('Extra Data')}
                >
                  <Text style={styles.btnText}>Extra Data</Text>
                </Button>
                <Spacer />
              </Flex>
            </Box>
          </Stack>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
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
  btnExtra: {
    width: 140,
    height: 34,
    backgroundImage: 'linear-gradient(90deg, #283D87 3.87%, #5373E5 97.42%)',
    borderRadius: '20px',
    transform: 'rotate(-0.09deg)',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.25)',
    margin: 0,
  },
  cancle: {
    borderRadius: '20px',
    height: 34,
    width: 140,
    borderColor: theme.colors.primary.dark,
    margin: 0,
  },
  btnText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 14,
    textAlign: 'center',
    color: '#F9F9F9',
  },
});
export default DataUsageHome;
