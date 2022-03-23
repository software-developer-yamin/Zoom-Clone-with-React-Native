import { StyleSheet, View } from "react-native";
import ContactsMenu from "../components/ContactsMenu";
import Header from "../components/Header";
import MenuButtons from "../components/MenuButtons";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <MenuButtons />
      <ContactsMenu />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#1c1c1c",
  },
});
