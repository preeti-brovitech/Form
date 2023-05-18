/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import  WebView  from 'react-native-webview';

export const WebComponent = (props) => {


 return (

    <WebView source={{ uri: 'https://brovitech.com/' }} style={{ flex: 1 }} />

 );
};


