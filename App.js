import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CreateStackNavigator } from '@react-navigator/stack';
import HomeScreen from './Screen/HomeScreen';
import SecondaryScreen from './Screen/SecondaryScreen';
import CafeScreen from './Screen/CafeScreen';
import BoloScreen from './Screen/BoloScreen';
import PaoScreen from './Screen/PaoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
 Component=
{HomeScreen} Optiions={{title: 'Bem-Vindo!'}}/>
<Stack.Screen Name="Secondary" Component={Secondary} Optiions= {{title: 'Opcões Deliciosas'}}/>
<Stack.Screen Name="Cafe" Component={CafeScreen} Optiions={{title: 'Nosso Café'}}/>
<Stack.Screen Name="Bolo" Component={BoloScreen} Optiions= {{titlle: 'Bolo de Chocolate'}}/>
<Stack.Screen Name="Pao" Component={PaoScreen} Optiions={{title: 'Pão Caseiro'}}/>
 </Stack.Navigator>
</NavigationContainer>

  );
}
