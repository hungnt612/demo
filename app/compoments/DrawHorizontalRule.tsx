

import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';


const {width, height} = Dimensions.get('window');
const DrawHorizontalRuler = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles.drawHorizontal} />
    </View>
  );
};

const styles = StyleSheet.create({
  drawHorizontal:{
    flex: 1,
    height: 0.5,
    backgroundColor: 'black',
    marginHorizontal:20,
  },
});

export default DrawHorizontalRuler;
