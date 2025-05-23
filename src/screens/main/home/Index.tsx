import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Images from '../../../assets';

import { styles } from './style';

const folders = [
  { id: '1', name: 'Personal', image: Images.download },
  { id: '2', name: 'Docs', image: Images.download },
  { id: '3', name: 'Info', image: Images.download },
  { id: '4', name: 'Photos', image: Images.download },
  { id: '5', name: 'Projects', image: Images.download },
  { id: '6', name: 'Links', image: Images.download },
];
const screenWidth = Dimensions.get('window').width;

const getRandomSize = () => {
  const sizes = [screenWidth * 0.4, screenWidth * 0.45, screenWidth * 0.5];
  return sizes[Math.floor(Math.random() * sizes.length)];
};

const Home = () => {
  const renderItem = ({ item }:any) => {
    const size = getRandomSize();
    return (
      <TouchableOpacity style={[styles.folder, { width: size, height: size }]}>
        <Text style={styles.folderName}>{item.name}</Text>
        <Image source={item.image} style={styles.folderImage} resizeMode="contain" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={folders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.gridContainer}
      />
    </View>
  );
};

export default Home;
