import React from 'react'
import "./post.css"

export default function Post() {
  return (

    <div className='post'>

        <div className="postContainer">

            <div className="postTop">
                <img src="/images/2.jpg" alt="" className="postImage" />
                <span className="postUserName">Kimuthu Gamge</span>
                <span className="postTime">5 mins ago</span>
            </div>

            <div className="postCenter">
                <div className="postCaption">
                    Bend your knee. Lord is here ! 
                </div>
                <img src="/images/2.jpg" alt="" className="postedImage" />

            </div>

            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/images/3.png" alt="" className="reactionPic" />
                    
                    <img src="/images/5.png" alt="" className="reactionPic" />
                    <img src="/images/4.png" alt="" className="reactionPic" />
                    <span className="likeCount">Kimuthu and 225 others</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentCount">
                        170 comments
                    </span>
                </div>
                 

            </div>

        </div>

    </div>
  )
}
