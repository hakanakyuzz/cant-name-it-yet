import './LeftSide.css'
import { GoHome } from "react-icons/go";
import {IoIosNotificationsOutline} from "react-icons/io";
import {IoCreateOutline, IoSearchOutline} from "react-icons/io5";
import {BiMessageSquareDetail} from "react-icons/bi";
import {Link, useLocation} from "react-router-dom";
import {RxHamburgerMenu, RxVercelLogo} from "react-icons/rx";
import {useEffect, useState} from "react";
import CreatePost from "../CreatePost/CreatePost.jsx";

const LeftSide = () => {
    const location = useLocation()
    const currentPath = location.pathname
    const isMessagePage = currentPath === '/messages' || currentPath === '/messages/userId'

    const [isCreateFieldVisible, setCreateFieldVisible] = useState(false)

    const handleToggleCreateField = () => {
        setCreateFieldVisible(!isCreateFieldVisible)
    }

    useEffect(() => {
        isCreateFieldVisible ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""

    }, [isCreateFieldVisible])

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
                <Link to={`/notifications`} className={`nav-container ${isMessagePage ? 'nav-container-message' : ''}`}>
                    <IoIosNotificationsOutline className='notification-element'/>
                    <span>Notifications</span>
                </Link>
                <Link to={`/search`} className={`nav-container ${isMessagePage ? 'nav-container-message' : ''}`}>
                    <IoSearchOutline/>
                    <span>Search</span>
                </Link>
                <Link to={`/messages`} className={`nav-container ${isMessagePage ? 'nav-container-message' : ''}`}>
                    <BiMessageSquareDetail/>
                    <span>Messages</span>
                </Link>
                <div className={`nav-container ${isMessagePage ? 'nav-container-message' : ''}`} onClick={handleToggleCreateField}>
                    <IoCreateOutline/>
                    <span>Create</span>
                </div>
                {isCreateFieldVisible && <CreatePost closeModal={handleToggleCreateField} />}
            </div>
            <div className={`nav-container ${isMessagePage ? 'nav-container-message' : ''}`}>
                <RxHamburgerMenu/>
                <span>More</span>
            </div>
        </div>
    )
}

export default LeftSide