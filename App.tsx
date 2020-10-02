import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// @ts-ignore
import LoginScreen from './components/LoginScreen/LoginScreen';

export default function App() {
  return (
    // <MomoScreen />
      <LoginScreen />
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
