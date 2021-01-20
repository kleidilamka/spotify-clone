import React, { useEffect, useState } from "react";
import { ImageBackground, FlatList, Text } from "react-native";
import { API, graphqlOperation } from "aws-amplify";

import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";
import albumDetails from "../data/albumDetails";
import SongListItem from "../components/SongListItem";
import AlbumHeader from "../components/AlbumHeader";
import { getAlbum } from "../graphql/queries";

const image = {
  uri:
    "https://www.teahub.io/photos/full/173-1734356_1920x1080-red-black-circular-gradient-destop-wallpaper-black.jpg",
};

const AlbumScreen = () => {
  const route = useRoute();
  const albumId = route.params.id;

  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchAlbumDetails = async () => {
      try {
        const data = await API.graphql(
          graphqlOperation(getAlbum, { id: albumId })
        );
        setAlbum(data.data.getAlbum);
      } catch (e) {
        console.log(e);
      }
    };

    fetchAlbumDetails();
  }, []);

  if (!album) {
    return <Text>Loading...</Text>;
  }

  return (
    <LinearGradient
      colors={["red", "black", "black"]}
      style={{ flex: 1 }}
      source={image}
    >
      <FlatList
        data={album.songs.items}
        ListHeaderComponent={() => <AlbumHeader album={album} />}
        renderItem={({ item }) => (
          <SongListItem song={item} keyExtractor={(item) => item.id} />
        )}
      />
    </LinearGradient>
  );
};

export default AlbumScreen;
