import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import StartMeeting from "../components/StartMeeting";

const MeetingRoom = () => {
  const navigation = useNavigation();

  const [name, setName] = useState(null);
  const [roomId, setRoomId] = useState(null);

  return (
    <View style={styles.container}>
      <StartMeeting />
    </View>
  );
};

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
});
