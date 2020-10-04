import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// @ts-ignore
import LoginScreen from './components/LoginScreen/LoginScreen';
import MomoScreen from "./components/MomoScreen/MomoScreen";
import TheLightScreen from "./components/TheLightScreen/TheLightScreen";
import InstagramScreen from "./components/InstagramScreen/InstagramScreen";

export default function App() {
  return (
    // <MomoScreen />
      // <LoginScreen />
      // <TheLightScreen />
      <InstagramScreen />
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
