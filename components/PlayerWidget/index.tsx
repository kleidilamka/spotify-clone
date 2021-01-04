import React from "react";
import { Text, Image, View } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const song = {
  id: "1",
  imageUri:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXe7so2XIRXpPE83DjVBZlR5FVHt_6MTAg1w&usqp=CAU",
  title: "AstroWorld  ·",
  artist: "Travis Scott",
};

const PlayerWidget = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      <View style={styles.rightContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
        <View style={styles.iconsContainer}>
          <AntDesign name="hearto" size={24} color="white" />
          <FontAwesome name="play" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
