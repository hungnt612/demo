import React, {createContext, useState} from 'react';
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

const initialValue = {
  dataUser:[],
};

export const DataContext = createContext({
  userID:{},
  setUserID:(data: any)=>{},
})

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Start"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
const Tab = createBottomTabNavigator();
function Explorer() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
const Stack = createStackNavigator();

 const App = () => {
   const [userID,setUserID]=useState(initialValue);
   console.log(userID)
   return (
     <SafeAreaView style={styles.container}>
       <DataContext.Provider
       value={{userID,setUserID}}
       >
       <NavigationContainer>
         <Stack.Navigator>
           <Stack.Screen name="Login" component={Login} />
           <Stack.Screen name="Explorer" component={Explorer} />
           <Stack.Screen name="Profile" component={Profile} />
         </Stack.Navigator>
       </NavigationContainer>
       </DataContext.Provider>
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
