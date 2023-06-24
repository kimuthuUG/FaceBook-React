import React from 'react'
import Navbar from '../../components/Navigation/Navbar'
import LeftPane from '../../components/LeftPane/LeftPane'
import RightPane from '../../components/RightPane/RightPane'
import MiddlePane from '../../components/MiddlePane/MiddlePane'
import "./home.css"

export default function Home() {
  return (
   <>
    <Navbar/>
    <div className='bottomContainer'>
    <LeftPane/>
    <MiddlePane/>
    <RightPane/>
    </div>
    
  </>
    

    
  )
}
