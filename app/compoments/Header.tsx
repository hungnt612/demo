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

type TextProps={
  lable: string;
  fontsize: string;
  type:string;
}

const {width, height} = Dimensions.get('window');

const Header:React.FC<TextProps> = ({
  lable, fontsize, type,
}) => {
  return(
      <View>
        <Text style={{fontWeight:type}}>
          {lable}
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    marginHorizontal: 30,
  },
  // customInput: {
  //   //color: isDarkMode ? Colors.white : Colors.black,
  //   color: 'orange',
  //   borderWidth: 0.5,
  //   borderColor: '#D0D0D0',
  //   padding: 10,
  //   borderRadius: 5,
  //   marginBottom:10,
  // },
  customButtonTxt: {
    color: 'white',
    fontWeight: 'bold',
  },
  txtUnder: {
    color: 'gray',
    alignSelf: 'center',
    top: 6,
  },
});

export default Header;
