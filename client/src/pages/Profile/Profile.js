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
                          <div className="userButtonSection">
                              <button className="userButton">
                                 <p>Message</p>
                              </button>
                              <button className="userButton">
                                 <p>Follow</p>    
                              </button>
                          </div>        
                      </div>
                      <div className="profileCount">
                          <div className="countUnit">
                              <p><span>800</span> posts</p>
                          </div>
                          <div className="countUnit">
                              <p><span>32k</span> Followers</p>
                          </div>
                          <div className="countUnit">
                              <p><span>8000</span> posts</p>
                          </div>
                      </div>

                      <div className="profileName">
                          <p>Incredible India</p>
                          <div clasName="profileDesc">
                            <p>{"Welcome to the official Instagram page of Incredible India | Tag us or use #IncredibleIndia to grant us permission to repost."}</p>
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