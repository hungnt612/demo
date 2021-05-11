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
import Question from "../compoments/Question";


const Quiz = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Question></Question>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});

export default Quiz;
