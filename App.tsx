import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import Home from './screens/Home';
import CrearEvento from './screens/CrearEvento';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      {/*SI NO SE PONEN ESTAS OPTIONS APARECE EL HEADER */}
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            title: '',
            headerTransparent: true,
            headerStyle: {
              backgroundColor: '#16A085',
            },
            headerTintColor: '#16A085',
          }}
        />
        <Stack.Screen name="Home" component={Home} options={{
          title: 'FireTickets',
          headerStyle: {
            backgroundColor: '#F5F5F5',
          },
          headerTintColor: 'black',
        }} />
        <Stack.Screen name="CrearEvento" component={CrearEvento} options={{
          title: 'Nuevo Evento',
          headerStyle: {
            backgroundColor: '#F5F5F5',
          },
          headerTintColor: 'black',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
