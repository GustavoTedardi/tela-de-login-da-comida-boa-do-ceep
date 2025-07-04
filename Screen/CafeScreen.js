
import React from 'react';

import {View, Text, Image, StyleSheet } from 'react-native';

export default function CafeScreen(){
  return(
    <View syle={styles.container}>
    <Text style={style.title}>Um Café Fresquinho</Text>
    <Image
    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG'}}
    style={Style.Image}
   <Text style={styles.description}>
   Comece o dia com uma xicara de cafe aromatico e  revigorante.
   </Text>
   </View>
  );
}
const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5dc',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5c4033',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderColor: '#d2b48c',
    borderWidth: 3,
  },
  discription: {
    fontSize: 18,
    textAlign: 'center',
    color: '#654321',
    marginHorizontal: 15,
    lineHeight: 25,
  },
})