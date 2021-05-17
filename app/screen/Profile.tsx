import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View } from "react-native";
import {DataContext} from "../../App"
import {useNavigation, useRoute} from '@react-navigation/native';

const Profile: React.FC<{navigation}> =({navigation}) => {
  const context=useContext(DataContext);
  const {userID}=context;
  const {dataUser}=userID;
  const {setUserID}=context;
  console.log(userID)
  return(
    <View style={styles.back}>
      <View style={styles.container1}>

      </View>
      <View style={styles.front}>
        <View style={styles.aaaa}>
          <Text>HIHIHIHI</Text><Text>HIHIHIHI</Text>
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
  front:{
    position:'absolute',
    zIndex:1,
    backgroundColor:'green',
    alignSelf:'center',
    marginTop:120,
  },
  aaaa:{
  },
  container1:{
    flex:2,
    backgroundColor:'blue',
  },
  container2:{
    flex:8,
    backgroundColor:"red",
  },

});


export default Profile;
