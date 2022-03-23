import { Entypo } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Entypo name="notification" size={30} color="#efefef" />
      </TouchableOpacity>
      <Text style={styles.heading}>Meet & Chat</Text>
      <TouchableOpacity>
        <Entypo name="new-message" size={30} color="#efefef" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  heading: {
    color: "#efefef",
    fontSize: 20,
    fontWeight: "700",
  },
});
