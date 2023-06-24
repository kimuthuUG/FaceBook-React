import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import "./navbar.css"

export default function Navbar() {
  return (
    <div className="navBarBox">
        <div className="navbarLeft">
            <span className='logo'>Fakebook</span>
        </div>
        <div className="navbarCenter">
            <div className="serchBarBox">
                <SearchIcon className='searchIcon'/>
                <input placeholder='search for your friend' className="searchInput"/>
            

            </div>
        </div>
        <div className="navbarRight">

            <div className="navbarLinks">
                <span className="navbarLink">HomePage</span>
                <span className="navbarLink">Profile</span>
            </div>

            <div className="navbarIcons">

                <div className="navbarIcon">
                    <PersonIcon/>
                    <span className="IconTag">3</span>

                </div>

                <div className="navbarIcon">
                   <MessageIcon/>
                   <span className="IconTag">4</span>
                </div>

                <div className="navbarIcon">
                    <SettingsIcon/>
                    <span className="IconTag">6</span>
                </div>
            </div>

            <div className="pic">
                <img src="images/1.jpeg" alt="" className="profilepicImage" />
            </div>
        </div>
    </div>
  )
}
