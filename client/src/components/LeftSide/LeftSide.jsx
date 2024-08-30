import './LeftSide.css'
import { GoHome } from "react-icons/go";
import {IoIosNotificationsOutline} from "react-icons/io";
import {IoCreateOutline, IoSearchOutline} from "react-icons/io5";
import {BiMessageSquareDetail} from "react-icons/bi";
import {Link} from "react-router-dom";
import {RxHamburgerMenu, RxVercelLogo} from "react-icons/rx";

const LeftSide = () => {
    return (
        <div className='left-side-container'>
            <div className={'left-inner-side-container'}>
                <Link to={'/'} className='nav-logo-container'>
                    <span>Can't name it yet!</span>
                    <RxVercelLogo />
                </Link>

                <Link to={'/'} className='nav-container'>
                    <GoHome/>
                    <span>Home</span>
                </Link>
                <div className='nav-container'>
                    <IoIosNotificationsOutline className='notification-element'/>
                    <span>Notifications</span>
                </div>
                <div className='nav-container'>
                    <IoSearchOutline/>
                    <span>Search</span>
                </div>
                <Link to={'/messages'} className='nav-container'>
                    <BiMessageSquareDetail/>
                    <span>Messages</span>
                </Link>
                <div className='nav-container'>
                    <IoCreateOutline/>
                    <span>Create</span>
                </div>
            </div>
            <div className='nav-container'>
                <RxHamburgerMenu/>
                <span>More</span>
            </div>
        </div>
    )
}

export default LeftSide