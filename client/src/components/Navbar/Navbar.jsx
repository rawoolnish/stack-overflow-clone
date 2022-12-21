import React,{useEffect} from 'react';
import './Navbar.css'
import { Link ,useNavigate} from 'react-router-dom';
import logo from './logo.png'
import search from './magnifying-glass-solid.svg';
import Avatar from './Avatar';
import decode from 'jwt-decode'

import {useSelector,useDispatch} from 'react-redux'
import { setCurrentUser } from '../../actions/currentUser';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var User = useSelector((state)=>(state.currentUserReducer))
 
   
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
    dispatch(setCurrentUser(null))
  }


  useEffect(() => {
    const token = User?.token
    if (token) {
      const decodeToken = decode(token)
      if (decodeToken.exp * 1000 < new Date().getItem()) {
        handleLogout()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    // eslint-disable-next-line
  }, [dispatch])
  

  return (
      <nav className='main-nav'>
          <div className='navbar'>
              <Link to='/' className='nav-item nav-logo'>
                  <img src={logo} width="150px" height="30px" alt="logo"></img>
        </Link>
        <Link  to='/' className='nav-item nav-btn' >About</Link>
        <Link  to='/' className='nav-item nav-btn' >Products</Link>
        <Link to='/' className='nav-item nav-btn' >For Teams</Link>
        <form>
          <input type='text' placeholder='Search...' />
          <img className='search-icon' src={search} alt="search" width="18" />
        </form>
        {User === null ? 
          <Link to="/Auth" className="nav-item nav-links">Log in </Link> :
          <>
            <Avatar Children={<Link to={`/Users/${User?.result._id}`} style={{
              color: "white", textDecoration: 'none'
            }}>{User.result.name.charAt(0).toUpperCase()}</Link>} backgroundColor='#009dff' px='10px' py="7px" borderRadius="50%" color='white' ></Avatar>
            <button className="nav-item nav-links" onClick={handleLogout}> Log Out</button>
            </>}
          </div>
    </nav>
  )
}

export default Navbar