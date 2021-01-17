import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import InstagramImage from './assets/instagram.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instagram</Text>
      <StatusBar style="auto" />
      <Image source={InstagramImage} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: "800",
    fontSize: 30,
    marginBottom: 20
  },
  image: {
    width: 80,
    height: 80
  }
});
