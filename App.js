import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';


export default function App(){

  const[counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>

      <Button title = "Get" onPress = { () => {
        let min = 1;
        let max = 100;
        const rand = min + Math.random() * (max-min)
        setCounter(Math.floor(rand));
        console.log(counter);
      }}/>

      <Text>RNG {counter}</Text>

     
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
