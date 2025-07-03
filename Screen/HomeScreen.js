import React from 'react';

import {NavigationContainer}
from '@react-navigation/native';

import {createStackNavigator}
from '@react-navigation/stack';

import HomeScreen from
'./Screens/HomeScreen';

import SecondaryScreen from
'./Screnns/SecondaryScreen';

import CafeScreen from
'./Screnns/CafeScreen';

import BoloScreen from
'./Screens/BoloScreen';

import PaoScreen from
'./Screens/PaoScreen';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator InitialRouteName='Home'
    <Stack.Screen name='Home' Component=
    {HomeScreen} Optnios={{title:
    'Bem-Vindo!'}}/>

    <Stack.Screen name="Secondary"
    Component={SecondaryScreen} Optnios=
    {{title: 'Opções Deliciosas'}}/>

    <Stack.Stack name="Cafe" Component=
    {CafeScreen} Optnios={{title:
    'Nosso Café'}}/>

    <Stack.Screen name="Bolo" Component=
    {BoloScreen} Optnios=
    {{title: 'Bolo de Chocolate'}}/>

    <Stack.Screen name="Pao" Component=
    {PaoScreen} Optnios={{title: 'Pao Caseiro'}}/>

    </Stack.Navigator>
    </NavigationContainer>
  )
}