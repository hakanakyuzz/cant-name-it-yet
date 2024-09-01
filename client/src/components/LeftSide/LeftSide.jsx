import './LeftSide.css'
import { GoHome } from "react-icons/go";
import {IoIosNotificationsOutline} from "react-icons/io";
import {IoCreateOutline, IoSearchOutline} from "react-icons/io5";
import {BiMessageSquareDetail} from "react-icons/bi";
import {Link, useLocation} from "react-router-dom";
import {RxHamburgerMenu, RxVercelLogo} from "react-icons/rx";

const LeftSide = () => {
    const location = useLocation()
    const currentPath = location.pathname
    const isMessagePage = currentPath === '/messages' || currentPath === '/messages/userId'

    return (
        <div className={`left-side-container ${isMessagePage ? 'left-side-container-message' : ''}`}>
            <div className={`left-side-header ${isMessagePage ? 'left-side-header-message' : ''}`}>
                <Link to={`/`} className={``}>
                    <RxVercelLogo/>
                </Link>
                <RxHamburgerMenu/>
            </div>
            <div className='left-inner-side-container'>
                <Link to={`/`} className={`nav-logo-container ${isMessagePage ? 'nav-logo-container-message' : ''}`}>
                <span>Can't name it yet!</span>
                    <RxVercelLogo />
                </Link>
                <Link to={`/`} className={`nav-container ${isMessagePage ? 'nav-container-message' : ''}`}>
                    <GoHome/>
                    <span>Home</span>
                </Link>
                <div className={`nav-container ${isMessagePage ? 'nav-container-message' : ''}`}>
                    <IoIosNotificationsOutline className='notification-element'/>
                    <span>Notifications</span>
                </div>
                <div className={`nav-container ${isMessagePage ? 'nav-container-message' : ''}`}>
                    <IoSearchOutline/>
                    <span>Search</span>
                </div>
                <Link to={`/messages`} className={`nav-container ${isMessagePage ? 'nav-container-message' : ''}`}>
                    <BiMessageSquareDetail/>
                    <span>Messages</span>
                </Link>
                <div className={`nav-container ${isMessagePage ? 'nav-container-message' : ''}`}>
                    <IoCreateOutline/>
                    <span>Create</span>
                </div>
            </div>
            <div className={`nav-container ${isMessagePage ? 'nav-container-message' : ''}`}>
                <RxHamburgerMenu/>
                <span>More</span>
            </div>
        </div>
    )
}

export default LeftSide