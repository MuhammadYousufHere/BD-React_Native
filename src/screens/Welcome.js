import React from "react";
import { StyleSheet, Text, View, ImageBackground ,Image} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function startPage({ navigation }) {
  return (
    
     
  <ImageBackground source={require('../../assets/bg.jpg')} resizeMode='stretch' style={{width: '100%', height: '100%',alignItems:'center', justifyContent:'center'}}>
  <Text style={styles.text}>Get great deals on</Text>
  <Text style={styles.text}>Services and products</Text>
  <Text style={styles.text}>For your home</Text>
 
  </ImageBackground>
//  <Image  source={require('../../assets/splach-illus.svg')}/>
  );
}
const styles = StyleSheet.create({
       imgBackground: {
    flex: 1,
    // width: null,

    // height:null,
    alignItems: "center",
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'normal',
    textAlign: 'center'
  }
});