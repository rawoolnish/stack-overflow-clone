import React from 'react';
import '../App.css'
import HomeMainbar from '../components/Navbar/Sidebar/HomeMainbar';
import LeftSidebar from '../components/Navbar/Sidebar/LeftSidebar';
import RightSidebar from '../components/Navbar/Sidebar/RightSidebar';


function Home() {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <HomeMainbar />
        <RightSidebar/>
        
      </div>
      
      
    </div>
  )
}

export default Home