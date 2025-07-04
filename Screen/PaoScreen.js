import {View, Text, Image, StyleSheet } from 'react-native';

export default function PaoScreen(){
  return(
    <View syle={styles.container}>
    <Text style={style.title}>Pao Caseiro Fresco</Text>
    <Image
    source={{uri: 'https://recipesblob.oetker.com.br/assets/18efac19eac14ceb8c1e1006f5944dbf/636x382/po-caseiro-super-fofinho.jpg'}}
    style={Style.Image}
   <Text style={styles.description}>
   O aroma e o sabor de um pao caseiro fresquinho, feito com carinho.
   </Text>
   </View>
  );
}
const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffaf0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8b4513',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderColor: '#deb887',
    borderWidth: 3,
  },
  discription: {
    fontSize: 18,
    textAlign: 'center',
    color: '#a0522d',
    marginHorizontal: 15,
    lineHeight: 25,
  },
})