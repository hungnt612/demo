import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Button,
 } from 'react-native';

 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
import ListProduct from "./app/screen/list_products";
import Home from "./app/screen/Home";
import User from "./app/screen/User";
import Quiz from "./app/screen/Quiz";
import SelectMultiple from 'react-native-select-multiple'



const answers1 = [
  ['Từ 1- 30 tuổi', 'Từ 31 - 40 tuổi', 'Từ 41 - 50 tuổi','Từ 51 - 60 tuổi ','Trên 60 tuổi'],
  [ 'Báo chí, tạp chí', 'Website: www.baosonparadise.vn', 'Gia đình/ Bạn bè', 'Tivi '],
  ['Dịch vụ tốt', 'Địa điểm thuận tiện', 'Giá hợp lý', 'Nhân viên chuyên nghiệp'],
  ['Sang trọng, tiện nghi, chất lượng tốt','Cũ, thiếu tiện nghi, chất lượng kém']
]


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Start"
        onPress={() => navigation.navigate('Q1')}
      />
    </View>
  );
}

function Question1({ navigation }){
  const [isSelected, setSelection] = useState(false);
  console.log(isSelected)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.question}>
            <Text style={{fontSize:30}}>Độ tuổi của Quý khách
            </Text>
            <View style={styles.answer}>
              <SelectMultiple
                items={answers1[0]}
                selectedItems={isSelected}
                onSelectionsChange={setSelection} />
            </View>
          </View>
        </View>
      </View>
      <Button
        title="Next"
        onPress={() => navigation.navigate('Q2')}
      />
    </View>
  );
}

function Question2({ navigation }){
  const [isSelected, setSelection] = useState(false);
  console.log(isSelected)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.question}>
            <Text style={{fontSize:30}}>Quý khách biết Bảo Sơn Paradise qua phương tiện thông tin nào?
            </Text>
            <View style={styles.answer}>
              <SelectMultiple
                items={answers1[1]}
                selectedItems={isSelected}
                onSelectionsChange={setSelection} />
            </View>
          </View>
        </View>
      </View>
      <Button
        title="Next"
        onPress={() => navigation.navigate('Q3')}
      />
    </View>
  );
}

function Question3({ navigation }){
  const [isSelected, setSelection] = useState(false);
  console.log(isSelected)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.question}>
            <Text style={{fontSize:30}}>Tại sao Quý khách hàng lựa chọn sử dụng dịch vụ của Bảo Sơn Paradise?
            </Text>
            <View style={styles.answer}>
              <SelectMultiple
                items={answers1[2]}
                selectedItems={isSelected}
                onSelectionsChange={setSelection} />
            </View>
          </View>
        </View>
      </View>
      <Button
        title="Next"
        onPress={() => navigation.navigate('Q4')}
      />
    </View>
  );
}

function Question4({ navigation }){
  const [isSelected, setSelection] = useState(false);
  console.log(isSelected)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.question}>
            <Text style={{fontSize:30}}>Cơ sở vật chất tại Thiên Đường Bảo Sơn :
            </Text>
            <View style={styles.answer}>
              <SelectMultiple
                items={answers1[3]}
                selectedItems={isSelected}
                onSelectionsChange={setSelection} />
            </View>
          </View>
        </View>
      </View>
      <Button
        title="Next"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function Result({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text></Text>
      <Button
        title="Exit"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createStackNavigator();
 const App = () => {
   return (
     <SafeAreaView style={styles.container}>
       <NavigationContainer>
         <Stack.Navigator>
           <Stack.Screen name="Home" component={HomeScreen} />
           <Stack.Screen name="Q1" component={Question1} />
           <Stack.Screen name="Q2" component={Question2} />
           <Stack.Screen name="Q3" component={Question3} />
           <Stack.Screen name="Q4" component={Question4} />
         </Stack.Navigator>
       </NavigationContainer>
     </SafeAreaView>
   );
 };

 const styles = StyleSheet.create({
   container:{
     flex:1,
   },
   container2:{
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

 export default App;
