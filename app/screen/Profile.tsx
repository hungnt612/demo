import React, {useState, useContext} from 'react';
import { Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {DataContext} from "../../App"
import {useNavigation, useRoute} from '@react-navigation/native';


var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const Profile: React.FC<{navigation}> =({navigation}) => {
  const context=useContext(DataContext);
  const {userID}=context;
  const {setUserID}=context;
  console.log(userID)
  return(
    <View style={styles.back}>
      <View style={styles.container1}>

      </View>
      <View style={styles.frontContainer}>
        <View style={styles.imgContainer}>
          <Image style={styles.img}  source={require("../img/hellohello.jpeg")}></Image>
        </View>
        <View style={styles.infor}>
          <Text style={styles.txtUserID}>{userID}</Text>
          <Text style={styles.txtJobTitle}>Mobile Developer</Text>
          <Text style={styles.paragraph}>
            bla bla bla bla bla bla
            {'\n'}
            bla bla bla bla bla bla
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <Button title={'Sign out'}  onPress={() => navigation.navigate('Home',{setUserID: 'duma'})}
          ></Button>
        </View>
      </View>
      <View style={styles.container2}>

      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  back: {
    flexDirection:'column',
    flex:1,
    zIndex:0,
  },
  btnContainer:{

  },
  btnSignOut:{

  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical:10,
  },
  txtUserID:{
    fontSize:30,
    fontWeight:'bold',
    marginTop:10,
  },
  txtJobTitle:{
    marginTop:5,
    color:'#57caf0',
  },
  infor:{
    justifyContent:"center",
    alignItems:"center",
  },
  frontContainer:{
    flexDirection:'column',
    position:'absolute',
    zIndex:1,
    alignSelf:'center',
  },
  imgContainer:{
    backgroundColor:'green',
    alignSelf:'center',
    marginTop:height*0.11,
    borderRadius: 75
  },
  img:{
    width:width*0.3,
    resizeMode:'cover',
    height:height*0.13,
    borderRadius: 75
  },
  container1:{
    flex:2,
    backgroundColor:'blue',
  },
  container2:{
    flex:8,
    backgroundColor:"#e7e7e7",
  },

});


export default Profile;
