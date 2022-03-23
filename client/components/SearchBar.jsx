import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="ios-search-sharp" size={20} color="#858585" />
      <Text style={styles.textSearchBar}>Search</Text>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333333",
    flexDirection: "row",
    paddingHorizontal: 10,
    height: 40,
    alignItems: "center",
    borderRadius: 10,
  },
  textSearchBar: {
    color: "#858585",
    paddingLeft: 10,
    fontSize: 18,
  },
});
