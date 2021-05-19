import React, {createContext,useState} from "react";

export const SurveyContext = createContext(
  {
    answers: {},
    setAnswers: (data: any) => {},
  }
)

const initialValue = {
  survey1Answer: [],
  survey2Answer: [],
};
const SurveyData: React.FC=({children}) =>{
  const [answers, setAnswers] = useState(initialValue);


  return(
    <SurveyContext.Provider value={{
      answers,setAnswers
    }}>
      {children}
    </SurveyContext.Provider>
  )

}

export default SurveyData;
