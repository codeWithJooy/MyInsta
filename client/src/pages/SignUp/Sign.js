import React from 'react'

const Sign=()=>{
    return(
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
               </div>

            </div>
        </div>
    )
}

export default Sign;