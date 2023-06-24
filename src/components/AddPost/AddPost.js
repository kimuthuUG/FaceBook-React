import React from 'react'
import "./addPost.css"
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';
export default function AddPost() {
  return (
    <div className='addpost '>
     <div className="addPostContainer">
        <div className="addPostTop">
            <img src="images/1.jpeg" alt="" className="addPostPic" />
            <input placeholder='whats in your mind..?' type='text' className='addPostInput'/>

        </div>

        <hr className='postHr'/>

        <div className="addPostBottom">

            <div className="addPostOptions">
            <div className="addPostOption">
            <AddAPhotoIcon htmlColor='orange' className="addPhoto"/>
            <span className="addPostOptionText">Add Photo/Vedio</span>
            </div>
            <div className="addPostOption">
            <LocationOnIcon htmlColor='red'className="addPhoto"/>
            <span className="addPostOptionText">Add Location</span>
            </div>
            <div className="addPostOption">
            <LocalOfferIcon htmlColor='blue'className="addPhoto"/>
            <span className="addPostOptionText">Add Tag</span>
            </div>
            <div className="addPostOption">
            <LiveTvIcon htmlColor='tomato'className="addPhoto"/>
            <span className="addPostOptionText">Go Live</span>
            </div>
            

            </div>

            <button className="postButton">
                Post
            </button>

        </div>
     </div>
    </div>
  )
}
