/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { Text, View,StyleSheet,Image,TextInput,Alert,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LoginScreen (props){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loading,setLoading] = useState(false);

 const {navigation} = props;
  // const onLoginPress = ()=>{
  //   navigation.navigate('dashboard',{
  //     email:email,

  //   });

  // };
  // const loginData = ()=>{

  //   setTimeout(async() => {

  //     let userData = await AsyncStorage.getItem('user');
  //     if (userData){
  //       userData = JSON.parse(userData);
  //       if (email === userData.Email && password === userData.Password){
  //           AsyncStorage.setItem('user',JSON.stringify({...userData,loggedIn:true}));
  //           navigation.navigate('dashboard',{
  //                 email:email,

  //               });

  //       }
  //       else {
  //           Alert.alert('error','invalid Details');
  //       }


  //     } else {
  //       Alert.alert('Error','user doest exit please signup first');
  //     }
  //   }, );
  // }

  const loginnData = async()=>{
    let userData = await AsyncStorage.getItem('user');
    if (userData){
      userData = JSON.parse(userData);
      if (email === userData.Email && password === userData.Password){
          AsyncStorage.setItem('user',JSON.stringify({...userData,loggedIn:true}));
          navigation.navigate('dashboard',{
                email:email,

              });

      }
      else {
          Alert.alert('error','invalid Details');
      }


    } else {
      Alert.alert('Error','user doest exit please signup first');
    }

  }
  // const onDashboardPress = ()=>{
  //   console.log(email,password);
  //   navigation.navigate('dashboard',{
  //     email:email,

  //   });

  // };
  const onClick = ()=>{
    navigation.navigate('signUp');
  };
    return (
      <View style={styles.container}>
          <Image
        style={styles.img}
        source={require('../Assets/img1.png')}
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
        value={email}
        onChangeText={(text)=>setEmail(text)}

      />
      <View style={{height:16}}/>
      <TextInput
        style={styles.input}
        placeholder="Your Password"

        placeholderTextColor={'white'}
        value={password}
        onChangeText={(text)=>setPassword(text)}
      />
        <View style={{height:25}}/>
       <TouchableOpacity style={styles.btn} onPress={loginnData} >
       <Text style = {styles.btnText}>Log in </Text>
      </TouchableOpacity>
      <View style={{height:25}}/>
      <Text style={styles.subtitle}>Don't have an account?
      <TouchableOpacity onPress={onClick}>

        <Text style={styles.link}>sign-up</Text>
        </TouchableOpacity></Text>

      {/* <TouchableOpacity  onPress={onDashboardPress} >
       <Text style={{color:'white'}}>dashboard </Text>
      </TouchableOpacity> */}
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
  link:{
    color:'#2BC990',
    fontWeight:'400',
    fontSize:16,
    lineHeight:19,
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
 }});
