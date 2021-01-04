import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  image: { width: 200, height: 200, margin: 15 },
  name: { color: "white", fontSize: 30, fontWeight: "bold" },
  creatorContainer: { flexDirection: "row", margin: 7 },
  creator: { color: "lightgray", margin: 2 },
  likes: { color: "lightgray", margin: 2 },
  button: {
    color: "white",
    borderRadius: 25,
    borderColor: "green",
    width: 180,
    height: 57,
    margin: 15,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
