import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text, TextInput,
  useColorScheme,
  View
} from "react-native";

const {width, height} = Dimensions.get('window');
const SearchBar = () => {
  const [state, setState] = useState('');
  console.log(state)
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.searchbar}
                 placeholder="Type Here..."
                 onChangeText={(state) => setState(state)}
      >
      </TextInput>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    marginVertical:5,
    marginHorizontal:18,
    // backgroundColor:'red',

  },
  searchbar:{
    borderRadius:8,
    borderColor:'gray',
    borderWidth: 1,
    height: height * 0.04,
  },
});

export default SearchBar;

