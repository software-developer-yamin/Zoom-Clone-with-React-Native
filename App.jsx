import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <VisualViewport>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </VisualViewport>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
