import React from 'react'
import {useHistory} from 'react-router-dom'
const Sign=()=>{
    let history=useHistory()
    const handleChange=()=>{
        history.push("/login")
    }
    return(
     <div className="main">
        <div className="signupContainer">
            <div className="signupCredentials">
               <div className="imageContainer">
                 <img src="docs/img/logoName.png" style={{margin:"0 auto"}}/>
               </div>
               <div className="imageContaner">
                   <p className="signupTitle">Sign up to see photos and videos from your friends.</p>
               </div>

               <button className="fbSignup">
                   <p>Log In With Facebook</p>
               </button>

               <div className="dividerContainer">
                   <div className="divider"></div>
                   <div className="dividerText">
                      <p>OR</p>
                   </div>
                   <div className="divider"></div>
               </div>

                <div className="inputSection">
                   <div className="inputUnit">
                       <input type="text" placeholder="Mobile Nummber or Email" />
                   </div>
                   <div className="inputUnit">
                       <input type="text" placeholder="Full Name" />
                   </div>
                   <div className="inputUnit">
                       <input type="text" placeholder="Username" />
                   </div>
                   <div className="inputUnit">
                       <input type="password" placeholder="Password" />
                   </div>

                    <button className="fbSignupDisable">
                      <p>Sign Up</p>
                    </button>

                </div>

            </div>
            
            <div className="already">
                <p>Have an account ?<span onClick={handleChange} style={{color:"#0095f6",marginLeft:"10px"}}>Log In</span></p>
            </div>

            <div className="getApp">
                <div className="getText">
                   <p>Get The App</p>
                </div>
                <div className="getImages">
                   <img className="getPics" src="docs/img/appleStore.png" />
                   <img className="getPics" src="docs/img/playStore.png" />
                </div>
            </div>
        </div>
     </div>
    )
}

export default Sign;