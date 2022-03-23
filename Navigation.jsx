import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import MeetingRoom from "./screens/MeetingRoom";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false}}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Room" component={MeetingRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
