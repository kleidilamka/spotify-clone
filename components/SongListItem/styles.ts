import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    color: "white",
    flexDirection: "row",
    margin: 20,
  },
  image: { width: 75, height: 75 },
  rightContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 13,
  },
  title: { color: "white", fontSize: 18, fontWeight: "bold", marginTop: 15 },
  artist: { color: "lightgray", fontSize: 16, marginBottom: 5 },
});

export default styles;
