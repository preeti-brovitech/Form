/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { Text, View,StyleSheet,TextInput,Alert,TouchableOpacity } from 'react-native'

export default function FakeUp (){
   const [name,setName] = useState('');
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   const [confirmPassword,setConfirmPassword] = useState('');
   const [display,setDisplay] = useState(false);
   const [error,setError] = useState({field:'',message:''});
  
//    const [message,setMessage] = useState('');


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
//  ---------------------------------------------------
const onSubmit = ()=>{

    let loginError = {field:'',message:''};
    if (name === ''){
     loginError.field = 'name'; 
    loginError.message === 'name is required';
    setError(loginError)
    }
    else if ( email === ''){
        loginError.field === 'email'; 
        loginError.message === ' email is required';
        setError(loginError);
    }
    else if (password === ''){
        loginError.field === 'password'; 
        loginError.message === ' password is required';
        setError(loginError);
    }
    else if (confirmPassword === ''){
        loginError.field === 'confirmPassword';
        loginError.message === ' password is required';
        setError(loginError)
    }

    else {
       
        setError.message(null);
        setError.field(null);
    //   setDisplay(true);  
    console.log(name,email,password,confirmPassword);
    Alert.alert('form Submited');
    // setName('');
    // setEmail('');
    // setPassword('');
    // setConfirmPassword('');
    }
    setDisplay(true);  
    // setName('');
    // setEmail('');
    // setPassword('');
    // setConfirmPassword('');
};
    return (
      <View style={styles.container}>
      <View style={{height:20}}/>
      {error.message}
      

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
      { error.field === 'name' && (<Text style={styles.message}>{error.message}</Text>) }
       {/* {error.field === 'name' && (<Text style={styles.subtitle}>{error.message}</Text>)} */}
     < View style={{height:25}}/>
       <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={'white'}
        onChangeText={(text)=>setEmail(text)}
        value={email}

      />
      { error.field === 'email' && (<Text style={styles.message}>{error.message}</Text>) }
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
        { error.field === 'password' && (<Text style={styles.message}>{error.message}</Text>) }
      
       
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
      { error.field === confirmPassword && (<Text style={styles.message}>{error.message}</Text>) }
       
        <View style={{height:25}}/>
       <TouchableOpacity 
       style={styles.btn}
       onPress={onSubmit}
        >
       <Text style = {styles.btnText}>Signup </Text>
      </TouchableOpacity>
      <View style={{height:25}}/>
      <Text style={styles.subtitle}>Already have an account?Login</Text>
      {display ? (   <Text style={styles.title}>{name} {email}{password}{confirmPassword}</Text>) : null}
   
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
input:{
  paddingHorizontal:20,
  borderColor:'white',
  borderWidth:1,
  borderRadius:30,
  width:'100%',
  height:58,
  color:'white',
}});
