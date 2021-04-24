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
  ReloadInstructions,a
} from 'react-native/Libraries/NewAppScreen';

const FlexBox = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.container2} />
        <View style={styles.container2} />
        <View style={styles.container2} />
        <View style={styles.container2} />
      </View>
      <View style={styles.container3}>
        <View style={styles.container2} />
        <View style={styles.container2} />
        <View style={styles.container2} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  container3: {
    flexDirection: 'row',
  },
  container2: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default FlexBox;
