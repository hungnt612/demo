import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,a
} from 'react-native/Libraries/NewAppScreen';

const inputSDT = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>du ma</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 35,
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
  customInputTitle: {
    color: '#E7421B',
    fontWeight: 'bold',
  },
});

export default inputSDT;
