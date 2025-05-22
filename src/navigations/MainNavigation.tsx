

import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer, ThemeProvider} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import BottomTabNavigation from './BottomTabNavigation';
import AuthNavigation from './AuthNavigation';


const Stack = createNativeStackNavigator();

function Navigation() {

   const Theme = {
     colors: {
       background: true ? '#000' : '#fff',
       text: true ? '#fff' : '#000',
     },
   };



  return (
    <NavigationContainer >
      <Stack.Navigator>
        {!true ? (
          <Stack.Screen
            name="Auth"
            component={AuthNavigation}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Dashboard"
            component={BottomTabNavigation}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}




export default function MainNavigation() {
  return (
    
    
      
           <Navigation />
   
   
  );
}