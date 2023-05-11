/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react'
import { Text, View,StyleSheet,Image,TextInput,Button,Alert,TouchableOpacity } from 'react-native'

export default function LoginScreen (){
    return (
      <View style={styles.container}>
          <Image
        style={styles.img}
        source={require('./src/Assets/img1.png')}
      />
      <View style={{height:51}}/>

       <Text style={styles.title}>Welcome Back!</Text>
       <View style={{height:27}}/>
       <Text style={styles.subtitle}>Please Log into your existing account</Text>
       <View style={{height:24}}/>
       <TextInput
        style={styles.input}
        placeholder="Your Email"
        placeholderTextColor={'white'}

      />
      <View style={{height:16}}/>
      <TextInput
        style={styles.input}
        placeholder="Your Password"
        keyboardType="numeric"
        placeholderTextColor={'white'}
      />
        <View style={{height:25}}/>
       <TouchableOpacity style={styles.btn} onPress={()=>Alert.alert('fome submitted')} >
       <Text style = {styles.btnText}>Log in </Text>
      </TouchableOpacity>
      </View>
    );
  }




const styles = StyleSheet.create({
  container:{
    backgroundColor:'#0A0171',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:20,
  },
  btn:{
    backgroundColor: '#2BC990',
    width:330,
    height:58,
    barderColor:'black',
    borderRadius:20,
  },
  btnText:{
    paddingHorizontal:138,
    paddingVertical:17,
    color:'white',
    fontSize:20,
    fontWeight:700,
    lineHeight:23.48,


  },
  title:{
    color:'#FFFFFF',
    fontWeight:'700',
    fontSize:20,
    lineHeight:23,
},
subtitle:{
  color:'#FFFFFF',
  fontWeight:'400',
  fontSize:16,
  lineHeight:19,
},
img:{
  width:177,
  height:158,

},
input:{
  paddingHorizontal:20,
  borderColor:'white',
  borderWidth:1,
  borderRadius:30,
  width:'100%',
  height:58,
  color:'white',
 

}
});
