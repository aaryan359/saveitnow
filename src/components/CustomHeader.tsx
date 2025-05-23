/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import componentStyles from './style';
import Images from '../assets';
import IconWrapper from './IconWrapper'; 

const BackButtonOnlyHeader = ({ onPress }: { onPress?: () => void }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={componentStyles.headerContainer}>
      <TouchableOpacity
        onPress={handleBackPress}
        style={componentStyles.backButton}>
        <IconWrapper Icon={Images.backB} size={26} color="#000" />
        <Text style={componentStyles.headerText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackButtonOnlyHeader;
