import React,{ useState, useRef }from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const mobilevalidate(text) {
//   const reg = /^\+?\d{9,11}$/;
//   if (reg.test(text) === false) {
//     this.setState({
//       mobilevalidate: false,
//       telephone: text,
//     });
//     return false;
//   } else {
//     this.setState({
//       mobilevalidate: true,
//       telephone: text,
//       message: '',
//     });
//     return true;
//   }
// }

const NhapSDT = () => {
  const [count, setCount] = useState(0);
  const [phone, setPhone] = useState('Nhap sdt cua ban');
  console.log(phone)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.customInputTitle}>Nhap so DT lan {count}</Text>
        <TextInput
          value={phone}
          onChangeText={text => setPhone(text)}
          style={styles.customInput}
          placeholder='nhap sdt'
          autoCorrect={false}
        />
        <TouchableOpacity
          onPress={() => setCount(count + 1)}
          style={{
            height: 60,
            borderRadius: 10,
            marginVertical: 10,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 35,
          }}>
          <Text style={styles.customButtonTxt}>OK</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
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
  customButtonTxt: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default NhapSDT;
