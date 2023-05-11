/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react'
import {View,StyleSheet } from 'react-native';
import SignUpScreen from './src/modules/SignUpScreen';


export default function App (){
    return (
      <View style={styles.container}>
      <SignUpScreen/>
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

});

