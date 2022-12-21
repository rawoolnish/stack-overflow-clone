
import React,{useState} from 'react';
import '../pages/Auth.css';
import './AboutAuth'
import AboutAuth from './AboutAuth';
import logo from './login.png';
import { signup, login } from '../actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Auth() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSwitch = () => {

   setIsSignup(!isSignup)
 }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isSignup) {
      if (!email || !password) {
        alert('All fields are mandatory')
      }
      dispatch(login({name,email,password},navigate))
    }
    if (isSignup) {
      if (!name || !email || !password) {
        alert('All fields are mandatory!')
      }
      dispatch(signup({name,email,password},navigate))
    }
   
  }
  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth/>}
      <div className='auth-container-2'>
        {!isSignup && <img src={logo} alt='stack-overflow' className='login-logo' height="70 px" />}
        <form onSubmit={handleSubmit}>
          {
            isSignup && (
              <label htmlFor='name'>
                <h4> Name</h4>
                <input type="text" id='name' name='name' onChange={(e)=>{setName(e.target.value)}}></input>
              </label>
            )
          }
          <label htmlFor='email '>
            <h4>Email</h4>
            <input type='email' name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}}></input>
          </label>  
          <label htmlFor='password '>
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <h4>Password</h4>
              {!isSignup && <h4 style={{color:"#007ac6",fontSize:'13px'}}>"forgot password ?"</h4>}
              </div>
            <input type='password' name='password' id='password' onChange={(e)=>{setPassword(e.target.value)}}></input>
            {isSignup && <p style={{color:"#666767",fontSize:'13px'}}>Passwords must contain at least eight characters <br/>including, at least 1 letter and 1 number.</p>}
          </label>
          {
            isSignup && (
              <label>
                <input type='checkbox' id='check'  />
                <p style={{fontSize:'13px'}}>Opt-in to receive occasional,<br/>product updates,user research invitations,<br/>company annoucements and digests.</p>
              </label>
            )
          }
          <button type='submit' className='auth-btn'>{isSignup ? 'Sign up' : 'Log in'}
          </button>
          {
            isSignup && (
              <p style={{color:"#666767",fontSize:'13px'}}>
                By clicking the "Sign up', you are agree to our<span style={{ color: "#007ac6" }}> terms of <br />service</span>,
                <span style={{color:"#007ac6"}}> privacy policy</span> and
                <span style={{color:"#007ac6"}}> cookie policy.</span>
 
              </p>
            )
          }

        </form>
        <p>
          {isSignup ? "already have an account ?" : "Don't have an account ?"}
          <button className='handle-switch-btn' type='button' onClick={handleSwitch}> {isSignup ?"Log in" : "Sign Up"}</button>
        </p>
      </div>
      </section>

  )
}

export default Auth