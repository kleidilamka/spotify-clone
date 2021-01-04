import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    position: "absolute",
    bottom: 79,
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "black",
    alignItems: "center",
  },
  image: { width: 75, height: 75, marginRight: 10 },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameContainer: { flexDirection: "row", alignItems: "center" },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    justifyContent: "space-around",
  },

  title: { color: "white", fontSize: 15, fontWeight: "bold", margin: 6 },
  artist: { color: "lightgray", fontSize: 16 },
});

export default styles;
