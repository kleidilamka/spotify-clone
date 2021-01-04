import React, { useEffect } from "react";
import { ImageBackground, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";
import albumDetails from "../data/albumDetails";
import SongListItem from "../components/SongListItem";
import AlbumHeader from "../components/AlbumHeader";

const image = {
  uri:
    "https://www.teahub.io/photos/full/173-1734356_1920x1080-red-black-circular-gradient-destop-wallpaper-black.jpg",
};

const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {
    console.log(route);
  }, []);

  return (
    <LinearGradient
      colors={["red", "black", "black"]}
      style={{ flex: 1 }}
      source={image}
    >
      <FlatList
        data={albumDetails.songs}
        ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
        renderItem={({ item }) => (
          <SongListItem song={item} keyExtractor={(item) => item.id} />
        )}
      />
    </LinearGradient>
  );
};

export default AlbumScreen;
