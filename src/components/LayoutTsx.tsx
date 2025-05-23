import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
} from "react-native";

type Card = {
  id: number;
  content: React.ReactNode;
  className?: string; // Not used in RN, kept for parity
  thumbnail: any; // require() image source
};

const screenWidth = Dimensions.get("window").width;
const cardSize = screenWidth / 2 -50;

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);

  const handlePress = (card: Card) => {
    setSelected(card);
  };

  const handleClose = () => {
    setSelected(null);
  };

  const renderItem = ({ item }: { item: Card }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handlePress(item)}
      activeOpacity={0.8}
    >
      <Image source={item.thumbnail} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />

      <Modal visible={!!selected} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={handleClose}>
          <View style={styles.overlay}>
            <View style={styles.modalContent}>
              <Image source={selected?.thumbnail} style={styles.modalImage} />
              <View style={styles.textContainer}>{selected?.content}</View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
 
    padding: 10,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  card: {
    width: cardSize,
    height: cardSize,
    backgroundColor: "#eee",
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: screenWidth * 0.8,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
  },
  modalImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  textContainer: {
    padding: 15,
  },
});
