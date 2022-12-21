import React from 'react';
import LeftSidebar from '../../components/Navbar/Sidebar/LeftSidebar';
import './Users.css';
import UserList from './UserList'


function Users() {


  return (
     
      <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2' style={{marginTop:"50px"}}> 
        <h1 style={{fontWeight:"400"}}>Users</h1>
            <UserList/>
      </div>
      
</div>
  )
}

export default Users