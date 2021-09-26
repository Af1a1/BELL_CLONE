import React, { useState } from 'react';
import {
  Box,
  FormControl,
  Icon,
  Input,
  NativeBaseProvider,
  ScrollView,
  Stack,
  Flex,
  Text,
  Checkbox,
  Spacer,
  Button,
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
  return (
    <NativeBaseProvider theme={theme}>
      <Card>
        <ScrollView
          w={{
            base: '100%',
            md: '100%',
          }}
        >
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
                <Flex direction="row" bg={theme.colors.primary.default} style={styles.card} mb={2}>
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
                  <Flex direction="column" align="center" justify="center">
                    <Fontisto name="night-clear" size={24} color="white" />
                    <Spacer />
                    <MaterialIcons name="arrow-forward-ios" size={32} color="white" />
                  </Flex>
                </Flex>
                <Flex direction="row" bg={theme.colors.primary.default} style={styles.card}>
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
                  <Flex direction="column" align="center" justify="center">
                    <Fontisto name="day-sunny" size={32} color="white" />
                    <Spacer />
                    <MaterialIcons name="arrow-forward-ios" size={32} color="white" />
                  </Flex>
                </Flex>
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
                  route="Data Usage"
                />
                <Spacer />
              </Flex>
            </Box>
          </Stack>
        </ScrollView>
      </Card>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
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
export default DataUsageHome;
