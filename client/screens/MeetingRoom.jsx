import { FontAwesome } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { io } from "socket.io-client";
import Chat from "../components/Chat";
import StartMeeting from "../components/StartMeeting";

let socket;

const menuIcons = [
  {
    id: 1,
    name: "microphone",
    title: "Mute",
    customColor: "#efefef",
  },
  {
    id: 2,
    name: "video-camera",
    title: "Stop",
  },
  {
    id: 3,
    name: "upload",
    title: "Share",
  },
];

const MeetingRoom = () => {
  const [name, setName] = useState(null);
  const [roomId, setRoomId] = useState(null);
  const [activeUsers, setActiveUsers] = useState([]);
  const [startCamera, setStartCamera] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [modalVisible, setModalVisible] = useState(false);

  const _startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  const joinRoom = () => {
    _startCamera();
    socket.emit("join-room", { roomId: roomId, userName: name });
  };

  useEffect(() => {
    socket = io("https://39fd-103-151-104-176.ngrok.io");
    socket.on("connection", () => console.log("connection established"));
    socket.on("all-users", (users) => {
      setActiveUsers(users);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        presentationStyle="fullScreen"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <Chat setModalVisible={setModalVisible} modalVisible={modalVisible} />
      </Modal>

      {/* Active Users */}
      {startCamera ? (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.activeUsersContainer}>
            <View style={styles.cameraContainer}>
              <Camera
                type={type}
                style={{
                  width: activeUsers.length <= 1 ? "100%" : 200,
                  height: activeUsers.length <= 1 ? 600 : 200,
                }}
              ></Camera>
              {activeUsers
                ?.filter((user) => user.userName != name)
                .map((user, index) => (
                  <View key={index} style={styles.activeUserContainer}>
                    <Text style={{ color: "white" }}>{user?.userName}</Text>
                  </View>
                ))}
            </View>
          </View>

          {/* Footer */}
          <View style={styles.menu}>
            <TouchableOpacity
              style={styles.tile}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.front
                    ? Camera.Constants.Type.back
                    : Camera.Constants.Type.front
                );
              }}
            >
              <FontAwesome name="camera" size={24} color="#efefef" />
              <Text style={styles.textTile}>Camera</Text>
            </TouchableOpacity>
            {menuIcons.map((icon, index) => (
              <TouchableOpacity key={index} style={styles.tile}>
                <FontAwesome name={icon.name} size={24} color="#efefef" />
                <Text style={styles.textTile}>{icon.title}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.tile}
            >
              <FontAwesome name="comment" size={24} color="#efefef" />
              <Text style={styles.textTile}>Chat</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : (
        <StartMeeting
          name={name}
          setName={setName}
          setRoomId={setRoomId}
          roomId={roomId}
          joinRoom={joinRoom}
        />
      )}
    </View>
  );
};

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  tile: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 15,
    marginBottom: 10,
  },
  textTile: {
    color: "white",
    marginTop: 5,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  cameraContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  activeUsersContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  activeUserContainer: {
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});
