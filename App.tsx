/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
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
import SearchBar from "./app/compoments/SearchBar";
 const App = () => {
   return (
     <SafeAreaView style={styles.container}>
       <SearchBar></SearchBar>
       <ListProduct></ListProduct>
     </SafeAreaView>
   );
 };

 const styles = StyleSheet.create({
    container:{
      flex:1,
    },
 });

 export default App;
