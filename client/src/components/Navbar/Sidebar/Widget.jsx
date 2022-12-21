import React from 'react';
import './RightSidebar.css';
import EditIcon from '@mui/icons-material/Edit';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import LayersIcon from '@mui/icons-material/Layers';

function Widget() {
  return (
      <div className='widget'>
          <h4>The OverFlow Blog</h4>
          <div className='right-sidebar-div-1'>
              <div className='right-sidebar-div-2'>
              <EditIcon fontSize='small'/> 
              <p>Observability is the key to the future of software (and your Devops career)</p> 
          </div>
              <div className='right-sidebar-div-2'>
              <EditIcon fontSize='small'/> 
              <p> Podcast 374: How valuable is your screen name ?</p> 
          </div>
        </div>
          <h4>Featured on Meta</h4>
          <div className='right-sidebar-div-1'>
              <div className='right-sidebar-div-2'>
              <ChatBubbleIcon fontSize='small'/> 
              <p>Rieview queue workflows - final release...</p> 
          </div>
              <div className='right-sidebar-div-2'>
              <ChatBubbleIcon fontSize='small'/> 
              <p>Please welcome Valued Associates:#958-V2Blast #959 - SpencerG </p> 
          </div>
              <div className='right-sidebar-div-2'>
              <LayersIcon fontSize='small'/> 
              <p>Outdated Answers : accepted answer is now unpinned on Stack Overflow</p> 
          </div>
        </div>
          <h4>Hot Meta Posts</h4>
          <div className='right-sidebar-div-1'>
              <div className='right-sidebar-div-2'>
              <p>38</p> 
              <p>Why was this spam flag declined, yet the question marked as spam ?</p> 
          </div>
              <div className='right-sidebar-div-2'>
              <p>20</p> 
              <p>What is the best course of action when a user has high enough rep to...</p> 
          </div>
              <div className='right-sidebar-div-2'>
              <p>45</p> 
              <p>Is a link to the "How to ask" help page a useful comment ?</p> 
          </div>
        </div>
    </div>
  )
}

export default Widget