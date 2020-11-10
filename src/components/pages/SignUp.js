import React from 'react';
import '../../App.css';
import './SignUp.css';

export default function SignUp() {
  return(
    <div className="sign-ups">
      <h1 className='sign-up'>SIGN UP</h1>
      <div className="login__container">
      BLOG
            <i class='fab fa-typo3'  />
                <form>
                    <h5>E-mail</h5>
                    <input type="email"  />
                    <h5>Password</h5>
                    <input type="password" />
                    <button  type="submit" className="login__signUpButton"> Sign Up</button>
                   
                </form>
            </div>
    </div>
  ) 
}
