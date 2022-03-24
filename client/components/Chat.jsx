import { Entypo, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Chat = ({ setModalVisible, modalVisible }) => {
  const [messageText, setMessageText] = useState("");
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%" }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>
              {/* Chat Header */}
              <View style={styles.headerContainer}>
                <Pressable onPress={() => setModalVisible(false)}>
                  <Text style={styles.headerButtonText}>Close</Text>
                </Pressable>
                <Text style={styles.headerHeading}>Chat</Text>
                <Entypo name="bell" size={25} color="#efefef" />
              </View>
              {/* Chat Messages */}
              <View style={styles.chatMessages}></View>
              {/* Type Messages */}
              <View style={styles.chatFormContainer}>
                <Text style={{ color: "white" }}>Send to: Everyone</Text>
                <View style={styles.chatForm}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Tap here to chat"
                    value={messageText}
                    onChangeText={(text) => setMessageText(text)}
                    placeholderTextColor="#595859"
                  />
                  <TouchableOpacity
                    style={{
                      ...styles.sendButton,
                      backgroundColor: messageText ? "#0b71eb" : "#373838",
                    }}
                  >
                    <FontAwesome name="send" size={18} color="#efefef" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  headerHeading: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerButtonText: {
    color: "white",
    fontSize: 20,
  },
  chatFormContainer: {
    borderColor: "#2f2f2f",
    borderTopWidth: 1,
    padding: 12,
  },
  chatForm: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    height: 40,
    color: "#efefef",
    borderColor: "#595859",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 12,
    flex: 1,
  },
  sendButton: {
    height: 40,
    width: 40,
    marginTop: 12,
    marginLeft: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  chatMessages: {
    flex: 1,
  },
});
