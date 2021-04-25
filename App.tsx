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
import ListProduct2 from "./src/screen/listProduct2";
const App = () => {
  return (
    <ListProduct2></ListProduct2>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  itemContainer:{

  },
  imgContainer:{

  },
  titleContainer:{

  },
  priceContaine:{

  },
});

export default App;
