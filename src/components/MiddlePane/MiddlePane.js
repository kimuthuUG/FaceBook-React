import React from 'react'
import "./middlePane.css"
import AddPost from '../AddPost/AddPost'
import Post from '../Post/Post'

export default function MiddlePane() {
  return (
    <div className='middlePaneBox'>

        <AddPost/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      
    </div>
  )
}
