import React from 'react';
import '../../App.css'

import LeftSidebar from '../../components/Navbar/Sidebar/LeftSidebar';
import RightSidebar from '../../components/Navbar/Sidebar/RightSidebar';
import QuestionDetails from './QuestionDetails';

function DisplayQuestions() {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <QuestionDetails/>
        <RightSidebar/>
        
      </div>
      
      
    </div>
  )
}

export default DisplayQuestions