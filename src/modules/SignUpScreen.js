/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { Text, View,StyleSheet,TextInput,Alert,TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUpScreen (props){
   const [name,setName] = useState('');
   
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   const [confirmPassword,setConfirmPassword] = useState('');
   const [display,setDisplay] = useState(false);
   const [error,setError] = useState({field:'',message:''});
   const [message,setMessage] = useState('');
   const {navigation} = props;


//    const onSubmit = ()=>{

   
//     let loginError = {field:'',message:''};
//     if (name === ''){
//         loginError.field = 'name';
//         loginError.message = 'field is required';
//      setError(loginError);
//     } else if (email === ''){
//         loginError.field = 'email';
//         loginError.message = 'email is required';
//         setError(loginError);
//     }
//       else if (password === ''){
//         loginError.field = 'password';
//         loginError.message = 'password required';
//     }

//     else {
//         setError('');
//     //   setDisplay(true);  
//     console.log(name,email,password,confirmPassword);
//     Alert.alert('form Submited');
//     setName('');
//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//     }
//     setDisplay(true);  
//     // setName('');
//     // setEmail('');
//     // setPassword('');
//     // setConfirmPassword('');
// };

const value = {
  Name:name,
  Email:email,
  Password:password,
};


const saveData = async()=>{
  try {
   
    await AsyncStorage.setItem('user', JSON.stringify(value));
    console.log(value);
    
  } catch (e) {
    console.log(error);
  }
};

//  ---------------------------------------------------
const onSubmit = ()=>{


    if (name === ''){
       
    setMessage('is required');
    }
    else if ( email === ''){
      
        setMessage('is required');
    }
    else if (password === ''){
     
        setMessage('required');
    }
    else if (confirmPassword === ''){
    
        setMessage('required');
    }
    else if (password !== confirmPassword){
      setDisplay(true);
      setMessage('required');
    }

    else {
      setDisplay(false);
        setMessage('');
        saveData();
     
    console.log(name,email,password,confirmPassword);
    Alert.alert('form submited');
    navigation.navigate('dashboard',{
      name:name,
      email:email,

    });

    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    }
    // setDisplay(true);  
    // setName('');
    // setEmail('');
    // setPassword('');
    // setConfirmPassword('');
};

const onClick = ()=>{
  navigation.navigate('login');};
    return (
      <View style={styles.container}>
      <View style={{height:20}}/>
      

       <Text style={styles.title}>Sign up</Text>
       <View style={{height:15}}/>
       <Text style={styles.subtitle}>Create your account with less information</Text>
       <View style={{height:24}}/>
       <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor={'white'}
        onChangeText={(text)=>setName(text)}
        value={name}

      />
      { message ? (<Text style={styles.message}>{`name ${message}`}</Text>) : null }
       {/* {error.field === 'name' && (<Text style={styles.subtitle}>{error.message}</Text>)} */}
     < View style={{height:25}}/>
       <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={'white'}
        onChangeText={(text)=>setEmail(text)}
        value={email}

      />
      { message ? (<Text style={styles.message}>{`email ${message}`}</Text>) : null }
      {/* {error.field === 'email' && (<Text style={styles.subtitle}>{error.message}</Text>)} */}
      <View style={{height:25}}/>
        <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'white'}
        onChangeText={(text)=>setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
        { message ? (<Text style={styles.message}>{`password ${message}`}</Text>) : null }
      
       
      <View style={{height:25}}/>
     
      <TextInput
        style={styles.input}
        placeholder="confirm Password"
        
        placeholderTextColor={'white'}
        onChangeText={(text)=>setConfirmPassword(text)}
        // onChangeText={handleChange}
        value={confirmPassword}
        secureTextEntry={true}
      />
      
      { display ? (<Text style={styles.message}>{'password not match'}</Text>) : null}
       
        <View style={{height:25}}/>
       <TouchableOpacity 
       style={styles.btn}
       onPress={onSubmit}
        >
       <Text style = {styles.btnText}>Signup </Text>
      </TouchableOpacity>
      <View style={{height:25}}/>
      <Text style={styles.subtitle}>Already have an account?
      <TouchableOpacity onPress={onClick}>
     
        <Text style={styles.link}>Login</Text>
        </TouchableOpacity></Text>

      {/* {display ? (   <Text style={styles.title}>{name} {email}{password}{confirmPassword}</Text>) : null} */}
   
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
    paddingHorizontal:130,
    paddingVertical:17,
    color:'white',
    fontSize:20,
    fontWeight:700,
    lineHeight:23.48,


  },
  title:{
    color:'#FFFFFF',
    fontWeight:'700',
    fontSize:25,
    lineHeight:23,
    marginVertical:20,
},
message:{
    color:'red',
    fontSize:16,
    marginRight:160
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
link:{
  color:'#2BC990',
  fontWeight:'400',
  fontSize:16,
  lineHeight:19,
  },
input:{
  paddingHorizontal:20,
  borderColor:'white',
  borderWidth:1,
  borderRadius:30,
  width:'100%',
  height:58,
  color:'white',
},
});
