import React from 'react';
import './HomeMainbar.css';
import { useLocation, useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux'
import QuestionsList from './QuestionsList';

 

const HomeMainbar=()=> {

  const location = useLocation();
  const user = useSelector((state)=>(state.currentUserReducer))
  const navigate = useNavigate();

  const questionsList = useSelector(state => state.questionsReducer)
  
  const checkAuth = () => {
    if (user === null) {
      alert("log in or sign up to ask a question")
      navigate('/Auth')
    } else {
      navigate('/AskQuestion')
    }
  }
  
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname ==='/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button className='ask-btn' onClick={checkAuth}>Ask Question</button>
      </div>
      <div>
        {
          questionsList.data === null ?
            <h1>Loading...</h1> :
            <>
              <p>{questionsList.data.length} questions </p>
              <QuestionsList questionsList={questionsList.data} />
            </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar