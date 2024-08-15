import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';


export const Login = () => {
  return (
    <div id='login'>
        <div className='card'>
            <div className='left'>
                <h1>Hello</h1>
                <p>Welcome to Walmart!</p>
                
            </div>
            <div className='right'>
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder='Username'/>
                    <input type="password" placeholder='Password'/>
                    <input type="email" placeholder='Email'/>
                    <Link to="/"><button>Login</button></Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
