import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Footer from './components/shared/Footer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardDetailsScreen from './components/CardDetailsScreen';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Footer'
            component={Footer}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='Card Details' component={CardDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
