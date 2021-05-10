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
const SearchBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchBar;
