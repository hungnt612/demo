import React from 'react';
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


const Stack = createStackNavigator();
 const App = () => {
   return (
     <SafeAreaView style={styles.container}>
       {/*<NavigationContainer>*/}
       {/*  <Stack.Navigator>*/}
       {/*    <Stack.Screen name="Home" component={Home} />*/}
       {/*    <Stack.Screen name="User" component={User} />*/}
       {/*  </Stack.Navigator>*/}
       {/*</NavigationContainer>*/}
        <Quiz></Quiz>
     </SafeAreaView>
   );
 };

 const styles = StyleSheet.create({
    container:{
      flex:1,
    },
 });

 export default App;
