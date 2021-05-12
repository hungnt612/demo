import React, { useState } from "react";
import { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
//import CheckBox from '@react-native-community/checkbox';
import SelectMultiple from 'react-native-select-multiple'

const fruits = ['Apples', 'Oranges', 'Pears']

const renderLabel = (label, style) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{marginLeft: 10}}>
        <Text style={style}>{label}</Text>
      </View>
    </View>
  )
}

const Question = () => {
  const [isSelected, setSelection] = useState(false);
  console.log(isSelected)
  return (
    <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.question}>
            <Text>skdgfilsfgusygfusydgfsuydgfusydgfusdygfusyd
              fsdiugfsudyfgsuydgfusydgfusydgfsudygfusydgfsuydfgusddfihgiduf
              dfghdifghidfjhgidufhgidjfghuid
              dfohgdifhg
            </Text>
            <View style={styles.answer}>
              <SelectMultiple
                renderLabel={renderLabel}
                items={fruits}
                selectedItems={isSelected}
                onSelectionsChange={setSelection} />
            </View>
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'red',
    width:'100%',
    flexDirection: "row",
    flexWrap: "wrap",
  },
  contentContainer:{
    backgroundColor:'gray',
    flexDirection:'column',
    marginHorizontal:5,
  },
  question:{

  },
  answer:{
    flexDirection:'row',
  },
});

export default Question;
