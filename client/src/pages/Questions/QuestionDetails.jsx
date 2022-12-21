import React,{useState} from 'react';
import { Link, useNavigate, useParams,useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import './QuestionDetails.css';
import Avatar from '../../components/Navbar/Avatar';
import DisplayAns from './DisplayAns';
import { postAnswer,deleteQuestion ,voteQuestion} from '../../actions/question';

import moment from 'moment';
import copy from 'copy-to-clipboard'

function QuestionDetails() {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
  
    
    const questionslist = useSelector(state => state.questionsReducer)
    const questionsList =questionslist.data
    
    const [Answer, setAnswer] = useState('');
    const User=useSelector((state)=>state.currentUserReducer)
    
    const handlePostAns = (e,answerLength) => {
        e.preventDefault()
        if (User === null) {
            alert('Login or Signup to answer a question');
            navigate('/Auth')
        } else {
            if (Answer === '') {
                alert('Enter an Answer berfore Submit')
            } else {
                dispatch(postAnswer({id,noOfAnswers:answerLength +1,answerBody:Answer,userAnswered:User.result.name, userId:User.result._id}))
            }
        }
    }
const url="http://localhost:3000"
    const handleShare = () => {
        copy(url + location.pathname);
        alert(`url copied :  ${url + location.pathname}`)
    }
    const handleDelete = () => {
        dispatch(deleteQuestion(id,navigate))
    }

    const handleUpVote = () => {
        dispatch(voteQuestion(id,'upVote',User.result._id))
    }

    const handleDownVote = () => {
        dispatch(voteQuestion(id,'downVote',User.result._id))
    }
  return (
      <div className='question-details-page'>
          {
              questionsList == null ?
                  <h1>Loading...</h1> :
                  <>
                      {
                          questionsList.filter(question => question._id===id).map(question => (
                              <div key={question._id}>
                                  <section className='question-details-container'>
                                      <h1>{question.questionTitle}</h1>
                                      <div className='question-details-container-2'>
                                          <div className="question-votes">
                                              <p className='votes-icon'><ArrowDropUpIcon fontSize='large' onClick={handleUpVote} /></p>
                                              <p>{question.upVote.length - question.downVote.length }</p>
                                              <p className='votes-icon'><ArrowDropDownIcon fontSize='large' onClick={handleDownVote}/></p>  
                                          </div>
                                          <div style={{ width: "100%" }}>
                                              <p className='question-body'>{question.questionBody}</p>
                                              <div className='question-details-tags'>
                                                  {
                                                      question.questionTags.map((tag) => (
                                                          <p key={tag}>{ tag}</p>
                                                      ))
                                                  }
                                              </div>
                                              <div className='question-actions-user'>
                                                  <div>
                                                      <button type='button' onClick={handleShare}>Share</button>
                                                      {
                                                          User?.result?._id === question?.userId && (
                                                              
                                                              <button type='button' onClick={handleDelete}>Delete</button>
                                                      )    
                                                      }
                                                  </div>
                                                  <div>
                                                      <p>Asked {moment(question.askedOn).fromNow()}</p>
                                                      <Link to={`/Users/${question.userId}`} className='user-link' style={{ color:"#0086d8" }}>
                                                         <Avatar Children={question.userPosted.charAt(0).toUpperCase()} backgroundColor='orange' px='8px' py='5px'  borderRadius='2px'></Avatar>
                                                          <div>
                                                              {question.userPosted}
                                                      </div>
                                                      </Link>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </section>
                                  
                                      {
                                          question.noOfAnswers !== 0 && (
                                          <section>
                                              <h3>{question.noOfAnswers} answers</h3>
                                              <DisplayAns key={question._id} question={question} handleShare={handleShare} />
                                              </section>
                                          )
                                  }
                                  <section className='post-ans-container'>
                                      <h3> Your Answer</h3>
                                      <form onSubmit={(e) => { handlePostAns(e,question.answer.length) }}>
                                          <textarea name="" id="" cols="30" rows="10" onChange={(e)=>setAnswer(e.target.value)}></textarea>
                                          <input type="submit" className='post-ans-btn' value='Post Your Answer'/>
                                      </form>
                                      <p>
                                          Browse other Question tagged
                                          {
                                              question.questionTags.map((tag) => (
                                                  <Link to='/Tags' key={tag} className='ans-tags'>{tag}</Link>
                                              ))
                                          } or <Link to='/AskQuestion' style={{ textDecoration: 'none',color:'#009dff'}}> ask your own question</Link>
                                      </p>
                                  </section>
                                  
                              </div>
                          ))
                      }
                  </>        
      }
          
    </div>
  )
}

export default QuestionDetails