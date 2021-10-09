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
      remainingData: '31.56 GB',
      validDateTime: '01/10/2021 12.00 AM',
      iconName: 'day-sunny',
    },
    {
      packageName: 'Night Time',
      remainingData: '11.03 GB',
      validDateTime: '01/10/2021 12.00 AM',
      iconName: 'night-clear',
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
        <Card>
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
            <Box>
              <Box>
                <List
                  p={0}
                  m={0}
                  // borderColor="red.200"
                  borderWidth={0}
                  borderRightWidth={0}
                  w="100%"
                >
                  {packages.map((packageItem, index) => (
                    <List.Item
                      key={index}
                      width="100%"
                      margin={0}
                      padding={0}
                      justifyContent="center"

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
                            Free Data
                          </Text>
                          <Text style={styles.text} fontSize="2xl" bold>
                            31.56 GB
                          </Text>
                          <Text style={styles.text} fontSize="xs">
                            Valid until 01/10/2021 12:00 AM
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
                            onPress={() => navigation.navigate('Data Usage', {packageItem})}
                          />
                        </Flex>
                      </Flex>
                    </List.Item>
                  ))}
                </List>
              </Box>
              <Flex direction="row">
                <Spacer />
                <Button
                  size="sm"
                  my="3"
                  variant="link"
                  colorScheme={'default'}
                  onPress={() => navigation.navigate('Usage History')}
                >
                  History
                </Button>
                <Spacer />
                <CommonButton
                  navigation={navigation}
                  text="Extra Data"
                  route="Extra Data"
                />
                <Spacer />
              </Flex>
            </Box>
          </Stack>
        </Card>
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
});
export default DataUsageHome;
