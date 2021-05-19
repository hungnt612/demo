import React, { createContext, useContext, useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Button,
 } from 'react-native';

 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
import ListProduct from "./app/screen/list_products";
import Home from "./app/screen/Home";
import User from "./app/screen/User";
import Quiz from "./app/screen/Quiz";
import Login from "./app/screen/Login";
import Profile from "./app/screen/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppNavigation from "./app/screen/AppNavigation";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SurveyContext } from "./app/screen/context/SurveyContext";

const Stack = createStackNavigator();

 const App = () => {
  const survey=useContext(SurveyContext);
  console.log(survey)
  useEffect(()=>{
    AsyncStorage.getItem('answers').then((value => {
      console.log('value:' + value);
      survey.setAnswers({
        answers:value,
      });
    }))
  },[]);

   return (
     <SafeAreaView style={styles.container}>
       <AppNavigation></AppNavigation>
     </SafeAreaView>
   );
 };

 const styles = StyleSheet.create({
   container:{
     flex:1,
   },
   container2:{
     backgroundColor:'red',
     width:'100%',
     flexDirection: "row",
     flexWrap: "wrap",
   },
   contentContainer:{
     backgroundColor:'gray',
     flexDirection:'column',
     marginHorizontal:5,
   },
   question:{

   },
   answer:{
     flexDirection:'row',
   },
 });

 export default App;
