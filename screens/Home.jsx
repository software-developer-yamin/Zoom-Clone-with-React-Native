import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
