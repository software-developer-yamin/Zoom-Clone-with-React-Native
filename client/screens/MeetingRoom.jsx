import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { io } from "socket.io-client";
import StartMeeting from "../components/StartMeeting";

let socket;

const MeetingRoom = () => {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();

  const joinRoom = () => {
    socket.emit("join-room", { roomId: roomId, userName: name });
  };

  useEffect(() => {
    socket = io("http://d215-103-151-104-176.ngrok.io");
    console.log("YOOOOOOO");
    socket.on("connection", () => console.log("connection established"));
  }, []);

  return (
    <View style={styles.container}>
      <StartMeeting
        name={name}
        setName={setName}
        setRoomId={setRoomId}
        roomId={roomId}
        joinRoom={joinRoom}
      />
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
