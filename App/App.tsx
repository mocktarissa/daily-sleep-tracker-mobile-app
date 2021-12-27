import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import SignupScreen from "./Screens/SignupScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from "./Screens/LoadingScreen";
import { useState } from "react";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAE4g9D4HPnKwZos7KPraxrqwfgozV83-4",
//   authDomain: "daily-sleep-tracker-cf6d4.firebaseapp.com",
//   projectId: "daily-sleep-tracker-cf6d4",
//   storageBucket: "daily-sleep-tracker-cf6d4.appspot.com",
//   messagingSenderId: "984988693499",
//   appId: "1:984988693499:web:2f716871c4070bc015115e"
// };



const Stack = createNativeStackNavigator();

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('isAuthenticated')
    if(value !== null) {
      // value previously stored
      return JSON.parse(value);
    }
    else{
storeData(false);
return false;
    }
  } catch(e) {
    // error reading value
  }
}

const storeData = async (value:any) => {
  try {
    await AsyncStorage.setItem('isAuthenticated', value)
  } catch (e) {
    // saving error
  }
}
export default function App() {
  const [isAuthenticated,setIsAuthenticated]= useState(getData());
 

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loading" component={LoadingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
