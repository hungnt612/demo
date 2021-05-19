import React, {createContext, useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { SurveyContext } from "./context/SurveyContext";
import SurveyData from "./context/SurveyContext";
import {SafeAreaView} from 'react-native';
import Home from "./Home";
import Survey1 from "./Survey1";
import Survey2 from "./Survey2";

const Stack=createStackNavigator();

const AppNavigation: React.FC =() =>{
  const survey = useContext(SurveyContext);

  return(
    <SurveyData>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Survey1' component={Survey1}></Stack.Screen>
        <Stack.Screen name='Survey2' component={Survey2}></Stack.Screen>
      </Stack.Navigator>
      </NavigationContainer>
    </SurveyData>
  )

}
export default AppNavigation;
