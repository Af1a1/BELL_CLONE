import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Footer from './components/shared/Footer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardDetailsScreen from './components/CardDetailsScreen';
import DataUsage from './components/DataUsage/DataUsage';
import ExtraData from './components/DataUsage/ExtraData';
import DataUsageHistory from './components/DataUsage/DataUsageHistory';
import PaymentHistory from './components/PaymentHistory';
import AddPackage from './components/AddPackage';
import EditLoginDetails from './components/EditLoginDetails';
import EditUserProfile from './components/EditUserProfile';
import Login from './components/Login';
function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen
            name='Footer'
            component={Footer}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='Login'
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='Card Details' component={CardDetailsScreen} />
          <Stack.Screen name='Extra Data' component={ExtraData} />
          <Stack.Screen name='Data Usage' component={DataUsage} />
          <Stack.Screen name='Usage History' component={DataUsageHistory} />
          <Stack.Screen name='Payment History' component={PaymentHistory} />
          <Stack.Screen name='Add Package' component={AddPackage} />
          <Stack.Screen name='Edit User Profile' component={EditUserProfile} />
          <Stack.Screen
            name='Edit Login Details'
            component={EditLoginDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
