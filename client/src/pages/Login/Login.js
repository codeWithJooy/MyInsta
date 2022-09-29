import React from 'react'
import {useHistory} from 'react-router-dom'

const Login=()=>{
    let history=useHistory()
    const handleChange=()=>{
        history.push("/signup")
    }
    return(
       <div className="main">
              <div className="signupContainer">
            <div className="signupCredentials">
               <div className="imageContainer">
                 <img src="docs/img/logoName.png" style={{margin:"0 auto"}}/>
               </div>

                <div className="inputSection">
                   <div className="inputUnit">
                       <input type="text" placeholder="Mobile Nummber or Email" />
                   </div>
                   <div className="inputUnit">
                       <input type="password" placeholder="Password" />
                   </div>

                    <button className="fbSignupDisable">
                      <p>Log In</p>
                    </button>

                </div>
                

                <div className="dividerContainer">
                   <div className="divider"></div>
                   <div className="dividerText">
                      <p>OR</p>
                   </div>
                   <div className="divider"></div>
                </div>

                <button className="fbSignup">
                   <p>Log In With Facebook</p>
               </button>
            </div>
            
            <div className="already">
                <p>Don't have an account ?<span onClick={handleChange} style={{color:"#0095f6",marginLeft:"10px"}}>Sign Up</span></p>
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

export default Login;