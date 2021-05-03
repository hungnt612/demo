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
import ListProduct from "./src/screen/listProduct";
import flexBox from "./src/screen/flexBox";
import FlexBox from "./src/img/flexBox";
import NhapSDT from "./src/screen/nhapSDT";
const App = () => {
  return (
    <ListProduct></ListProduct>
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
