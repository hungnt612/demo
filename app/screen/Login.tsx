import React, {useState, useContext} from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {DataContext} from "../../App";

const Login: React.FC<{navigation}> =({navigation}) => {
  const context=useContext(DataContext);
  const {userID}=context;
  const [ID=userID,setID]=useState('')
  const {setUserID}=context;
  console.log(userID)
  return (
    <View style={styles.container}>
      <Text style={styles.customInputTitle}>Email ID</Text>
      <TextInput
        style={styles.customInput}
        placeholder="Enter your email here"
        autoCorrect={false}
        onChangeText={(ID)=>setUserID(ID)}
      />
      <Text style={styles.customInputTitle}>Password</Text>
      <TextInput
        style={styles.customInput}
        placeholder="Enter your password here"
        autoCorrect={false}
        secureTextEntry={true}
      />
      <TouchableOpacity>
          <Text style={styles.txtUnder}>For got password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Explorer',{setUserID: userID})}
        style={{
          height: 60,
          borderRadius: 10,
          marginVertical: 10,
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.customButtonTxt}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection:"column",
    justifyContent:"center",
    marginHorizontal: 35,
  },
      customInputTitle: {
      color: '#E7421B',
      fontWeight: 'bold',
    },
  customInput: {
    //color: isDarkMode ? Colors.white : Colors.black,
    color: '#E7421B',
    borderWidth: 0.5,
    borderColor: '#D0D0D0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  txtUnder: {
    textAlign: 'right',
    color: '#E7421B',
    //textDecorationLine: 'underline',
    fontStyle: 'italic',
    top: -6,
    fontSize: 12,
  },
  customButtonTxt: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Login;
