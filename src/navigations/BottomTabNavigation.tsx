
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProfileNavigation from './ProfileNavigation';


import profile from '../assets/profile1.jpeg';
import home from '../assets/home.png';
import setting from '../assets/setting.png';

import user from '../assets/userLogo.png';
import plus from '../assets/plus.jpeg';



import Images from '../assets/index';
import CustomTabBar from '../components/CustomTabBar';
import IconWrapper from '../components/IconWrapper';
import HomeNavigation from './HomeNavigation';
import AddNavigation from './AddNavigation';




const Tab = createBottomTabNavigator();


export default function BottomTabNavigation() {


  console.log('BottomTabNavigation');
  console.log('Images', Images);
  console.log('profile', profile);
  console.log('home', home);
  console.log('setting', setting);
  console.log('user', user);


  const isDarkMode = true;

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDarkMode ? '#272727' : '#DCDDE0',
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeNavigation}
        options={() => ({
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <IconWrapper
                Icon={home}
                color={isDarkMode ? '#fff' : '#000'}
                size={size}
              />
            ) : (
              <IconWrapper
                Icon={home}
                color={isDarkMode ? '#fff' : '#000'}
                size={size}
              />
            ),
        })} />

        
      <Tab.Screen
        name="ProfileStack"
        component={ProfileNavigation}
        options={() => ({
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <IconWrapper
                Icon={user}
                color={isDarkMode ? '#fff' : '#000'}
                size={size}
              />
            ) : (
              <IconWrapper
                Icon={user}
                color={isDarkMode ? '#fff' : '#000'}
                size={size}
              />
            ),
        })}
      />

      <Tab.Screen
        name="Addstack"
        component={AddNavigation}
        options={() => ({
          tabBarLabel: 'Add',
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <IconWrapper
                Icon={plus}
                color={isDarkMode ? '#fff' : '#000'}
                size={size}
              />
            ) : (
              <IconWrapper
                Icon={plus}
                color={isDarkMode ? '#fff' : '#000'}
                size={size}
              />
            ),
        })}
            
      />
      <Tab.Screen
        name="SearchStack"
        component={AddNavigation}
        options={() => ({
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <IconWrapper
                Icon={home}
                color={isDarkMode ? '#fff' : '#000'}
                size={size}
              />
            ) : (
              <IconWrapper
                Icon={home}
                color={isDarkMode ? '#fff' : '#000'}
                size={size}
              />
            ),
        })}
      />
    </Tab.Navigator>
  );
}


