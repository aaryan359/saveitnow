/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// CustomTabBar.js
import React, {memo} from 'react';
import {View, Text, Animated, TouchableWithoutFeedback} from 'react-native';


const CustomTabBar = memo(function CustomTabBar({
  state,
  descriptors,
  navigation,
}) {
  
  const isDarkMode = true;

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: isDarkMode ? '#272727' : '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const scaleAnimation = React.useRef(new Animated.Value(1)).current;

        React.useEffect(() => {
          if (isFocused) {
            Animated.sequence([
              Animated.timing(scaleAnimation, {
                toValue: 1.2,
                duration: 100,
                useNativeDriver: true,
              }),
              Animated.timing(scaleAnimation, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
              }),
            ]).start();
          }
        }, [isFocused]);

        return (
          <TouchableWithoutFeedback key={index} onPress={onPress}>
            <Animated.View
              style={{
                flex: 1,
                transform: [{scale: scaleAnimation}],
                alignItems: 'center',
                padding: 10,
                height: 80,
                // borderTopWidth: 2,
                borderTopColor: isFocused ? '#DCDDE0' : '#DCDDE0',
              }}>
              {options.tabBarIcon({
                focused: isFocused,
                color: isDarkMode
                  ? isFocused
                    ? '#FE8723'
                    : '#818181'
                  : isFocused
                  ? '#FE8723'
                  : '#757575',
                size: 20,
              })}
              <Text
                style={{
                  color: isFocused ? '#FE8723' : '#818181',
                  fontSize: 12,
                  marginTop: 4,
                }}>
                {label}
              </Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
});

export default CustomTabBar;
