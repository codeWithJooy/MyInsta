import React from 'react'

const Profile=()=>{
    return(
        <div className="profileMain">
            <div className="profileContainer">
                <div className="topSection">
                    <div className="profilePicSection">
                       <div className="profilePic">
                           <img src="docs/img/img1.jpg" />
                       </div>
                    </div>
                    <div className="topData">
                      <div className="topProfile">
                          <div className="userName">
                              <h2>incredibleindia</h2>
                          </div>
                          <div className="userButtons">
                          </div>        
                      </div>
                    </div>
                </div>    
                <div className="imageSection">
                    <img src="docs/img/img1.jpg" />
                    <img src="docs/img/img1.jpg" />
                    <img src="docs/img/img1.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Profile;