import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './screens/HomePage'

export default function App() {
  return (
    <View style={styles.container} >
      <Text style={{color:"red", fontWeight: 'bold'}} >The quick brown fox jumps over the lazy dog</Text>
      <HomePage />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey'
  },
});
