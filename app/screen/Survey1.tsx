import React, {useState, useContext} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { SurveyContext } from "./context/SurveyContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const data = [
  '1. Từ 1 - 30 tuổi',
  '2. Từ 31 - 40 tuổi',
  '3. Từ 41 - 50 tuổi',
  '4. Từ 51 - 60 tuổi',
  '5. Trên 60 tuổi',
];

const Survey1:React.FC =() =>{
  const navigation = useNavigation();
  const survey = useContext(SurveyContext);
  const {answers}= survey;
  const {survey1Answer} = answers as any;
  const {setAnswers} = survey;
  const submit = async (data: any)=>{
    try {
      await AsyncStorage.setItem('answers',data.survey1Answer);
      console.log(data)
      //survey.setAnswers(data);
    }catch (e){
      console.log(e);
    }
  };
  console.log(answers)
  console.log(survey1Answer)
  const handleCheckBox = (arrange: number) => {
    const isChecked = survey1Answer.find(item => item === data[arrange]);
    if (!isChecked) {
      //option not chosen
      const array = [...survey1Answer, data[arrange]];
      setAnswers({...answers, survey1Answer: array});
    } else {
      //option was chosen
      setAnswers({
        ...answers,
        survey1Answer: survey1Answer.filter(item => item != data[arrange]),
      });
    }
  };

  return(

    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center'}}>Câu 1:</Text>
      <Text>Độ tuổi của quý khách:</Text>
      <View>
        {data.map((item, index) => {
          const isChecked = survey1Answer.find(item => item === data[index]);
          return (
            <View
              key={index}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => handleCheckBox(index)}
                style={{
                  width: 30,
                  height: 30,
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {isChecked && <Text>V</Text>}
              </TouchableOpacity>
              <Text>{item}</Text>
            </View>
          );
        })}
      </View>
      <View>
        <Button
          title="Submit"
          color="yellow"
          onPress={submit}
        />
        <Button
          title="Next"
          color="green"
          onPress={() =>
            navigation.navigate('Survey2', {
              arrSurvey: answers,
            })
          }
        />
      </View>
    </View>
      );

}
export default Survey1;
