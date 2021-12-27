import { AccountCircle, ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, {useState} from 'react'
import './navbar.scss'

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    // console.log(isScrolled)

    return (
        <div className={isScrolled? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img 
                        src="https://www.pngall.com/wp-content/uploads/4/Netflix-Official-Logo.png"
                        alt = "Logo"
                    />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icons"/>
                    <span>KID</span>
                    <Notifications className="icons"/>
                    <AccountCircle className="icons"/>
                    <div className="profile">
                        <ArrowDropDown className="icons"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar