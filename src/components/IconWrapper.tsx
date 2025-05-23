import React from 'react';
import { View, Image } from 'react-native';

const IconWrapper = ({ Icon, color, size }: any) => {
  const source = typeof Icon === 'number' ? Icon : { uri: Icon };
  return (
    <View style={{ width: size, height: size }}>
      <Image
        source={source}
        style={{ width: size, height: size, tintColor: color }}
        resizeMode="contain"
      />
    </View>
  );
};

export default IconWrapper;
