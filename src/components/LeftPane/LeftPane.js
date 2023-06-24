import React from 'react'
import "./leftPane.css"
import MessageIcon from '@mui/icons-material/Message';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import CalendarMonthlcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
       <div className="leftPainContainer">
        <div className="leftPaneMenu">
            <div className="leftPaneMenuItems">
                <MessageIcon className='leftMenuIcon'/>
                <span className="leftPaneMenuText">

                    Messages

                </span>

            </div>
            <div className="leftPaneMenuItems">
                <GroupIcon className='leftMenuIcon'/>
                <span className="leftPaneMenuText">

                    Groups

                </span>

            </div>
            <div className="leftPaneMenuItems">
                <RssFeedIcon className='leftMenuIcon'/>
                <span className="leftPaneMenuText">

                    Feed

                </span>

            </div>
            <div className="leftPaneMenuItems">
                <CalendarMonthlcon className='leftMenuIcon'/>
                <span className="leftPaneMenuText">

                    Events

                </span>

            </div>
            <div className="leftPaneMenuItems">
                <BuildIcon className='leftMenuIcon'/>
                <span className="leftPaneMenuText">

                   Settings

                </span>

            </div>
            <div className="leftPaneMenuItems">
                <SportsEsportsIcon className='leftMenuIcon'/>
                <span className="leftPaneMenuText">

                   Games

                </span>

            </div>
            <div className="leftPaneMenuItems">
                <NewspaperIcon className='leftMenuIcon'/>
                <span className="leftPaneMenuText">

                   News

                </span>

            </div>
            <div className="leftPaneMenuItems">
                <WorkOutlineIcon className='leftMenuIcon'/>
                <span className="leftPaneMenuText">

                   Jobs

                </span>

            </div>
            <div className="leftPaneMenuItems">
                <ShoppingCartIcon className='leftMenuIcon'/>
                <span className="leftPaneMenuText">

                 Market
                 
                </span>
                
               

            </div>
            <hr/>
            <div className="pagesYouLiked">
                <h1>Pages you liked</h1>
            </div>
            <div className="pageList">
                
            <li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">Code with Kimuthu</span>
            </li>
            <li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">Code with Kimuthu</span>
            </li>
            <li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">Code with Kimuthu</span>
            </li><li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">Code with Kimuthu</span>
            </li>
            <li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">Code with Kimuthu</span>
            </li>
            <li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">Code with Kimuthu</span>
            </li>
            <li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">Code with Kimuthu</span>
            </li><li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">Code with Kimuthu</span>
            </li>
            </div>
        </div>
         
       </div>
      
    </div>
  )
}
