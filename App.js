import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome</Text>
      <Text style={styles.text}>Hello Alex</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24
  },
  headerText: {
    fontSize: 26,
    color: '#fff'
  },
  text: {
    fontSize: 22,
    color: '#fff'
  }
});
