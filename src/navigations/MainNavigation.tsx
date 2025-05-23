

import { View, Text } from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation';
import AuthNavigation from './AuthNavigation';




import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Navigation() {
  return (
   <NavigationContainer >
      <Stack.Navigator>
        {!true? (
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
