import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Album } from "../../types";
import styles from "./styles";

export type AlbumHeaderProps = {
  album: Album;
};

const image = {
  uri:
    "https://us.123rf.com/450wm/modusuper5/modusuper51308/modusuper5130800003/21800798-abstract-modern-red-and-black-background-gradient-pattern.jpg?ver=6",
};

const AlbumHeader = (props: AlbumHeaderProps) => {
  const { album } = props;
  return (
    <View style={styles.container}>
      <Image source={{ uri: album.imageUri }} style={styles.image} />
      <Text style={styles.name}>{album.name}</Text>
      <View style={styles.creatorContainer}>
        <Text style={styles.creator}>By {album.by}</Text>
        <Text style={styles.likes}>{album.numberOfLikes} Likes</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>PLAY</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumHeader;
