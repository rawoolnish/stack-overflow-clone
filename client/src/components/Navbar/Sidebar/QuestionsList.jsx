import React from 'react';
import Questions from './Questions';


function QuestionsList(props) {
  return (
    <>{
      
        props.questionsList.map((question)=> (
            <Questions question={question} key={question._id} />
              ))
            
      }
      </>
  )
}

export default QuestionsList