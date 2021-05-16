import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type CustomInputProps = {
  label: string;
  placeholder: string;
  action: string;
};

const CustomInput: React.FC<CustomInputProps> = ({
                                                   label,
                                                   placeholder,
                                                   action,
                                                 }) => {
  const isEmail = label === 'Email';
  const isPasswordInLogin = label === 'Password' && action === 'Login';
  const isPasswordInRegister = action === 'Register' && label === 'Password';
  const sceenAction = action === 'Login';
  const registerWithPhone=false;

  if (sceenAction) {
    return (
      <View style={styles.container}>
        <Text style={styles.customInputTitle}>{label}</Text>
        <TextInput
          style={styles.customInput}
          placeholder={placeholder}
          secureTextEntry={isPasswordInLogin || isPasswordInRegister}
          autoCorrect={false}
        />
        {isEmail ? (
          <Text style={styles.txtUnder}>or, {action} with phone number</Text>
        ) : null}
        {isPasswordInLogin ? (
          <Text style={styles.txtUnder}>Forgot Password ?</Text>
        ) : null}
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.customInputTitle}>{label}</Text>
      <TextInput
        style={styles.customInput}
        placeholder={placeholder}
        secureTextEntry={isPasswordInLogin || isPasswordInRegister}
        autoCorrect={false}
      />
      <TouchableOpacity>
        {isEmail ? (
          <Text style={styles.txtUnder}>or, {action} with a phone number</Text>
        ) : null}
      </TouchableOpacity>
      {isPasswordInRegister ? (
        <Text style={styles.txtNote}>
          Password must be at least 6 characters
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
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
  txtUnder: {
    textAlign: 'right',
    color: '#E7421B',
    textDecorationLine: 'underline',
    fontStyle: 'italic',
    top: -6,
    fontSize: 12,
  },
  txtNote: {
    color: 'gray',
    textAlign: 'right',
    top: -6,
    fontStyle: 'italic',
    fontSize: 12,
  },
});
export default CustomInput;
