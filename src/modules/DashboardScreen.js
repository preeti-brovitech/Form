/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity, Alert} from 'react-native';
import { useRoute } from '@react-navigation/native';


const DashboardScreen = (props) => {
    const route = useRoute();
    let email = null;
    let name = null;
     email = route.params?.email;
     name = route.params?.name;
    const {navigation} = props;
    const loginscreen = ()=>{
        navigation.navigate('login');
    }

  return (
    <View style={styles.container}>
        {/* <Text>Hello{email} </Text> */}
        <View style={{ height:30 }}/>

        <Text style={styles.title}>Welcome to the Dashboard</Text>

        <View style={{height:30}}/>

        <Text style={styles.subtitle}>User details</Text>

        <View style={{height:30}}/>

        {email.length  > 0  ? (<Text style={{color:'white'}}>User's Email: {email}  </Text>) : (<Text style={{color:'white'}}>No data</Text>) }

        <View style={{height:30}}/>
          {name && <Text  style={{color:'white'}} >User's name : {` ${name}`}</Text>}

          <TouchableOpacity  style={styles.btn}
       onPress={loginscreen}
        >
       <Text style = {styles.btnText}>Login </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#0A0171',
        alignItems:'center',
       paddingHorizontal:0,
    },
    btn:{
        backgroundColor: '#2BC990',
        width:150,
        height:58,
        barderColor:'pink',
        // borderWidth:5,
        borderRadius:20,
      },
      btnText:{
        alignSelf:'center',
        paddingVertical:15,
        color:'white',


      },
    title:{
        fontSize:32,
        fontWeight:'700',
        color:'white',
    },
    subtitle:{
        fontSize:20,
        fontWeight:'500',
        color:'white',
    }

})
