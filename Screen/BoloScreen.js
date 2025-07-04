import {View, Text, Image, StyleSheet } from 'react-native';

export default function BoloScreen(){
  return(
    <View syle={styles.container}>
    <Text style={style.title}>Bolo de chocolate delicioso</Text>
    <Image
    source={{uri: 'https://www.sabornamesa.com.br/media/k2/items/cache/652db931b03434af33c6ed02458509c9_XL.jpg'}}
    style={Style.Image}
   <Text style={styles.description}>
   Uma fatia irresistivel de bolo de chocolate, perfeito para qualquer hora.
   </Text>
   </View>
  );
}
const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8ff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4a2c2a',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderColor: '#6b3e2e',
    borderWidth: 3,
  },
  discription: {
    fontSize: 18,
    textAlign: 'center',
    color: '#5e403d',
    marginHorizontal: 15,
    lineHeight: 25,
  },
})