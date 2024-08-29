import './LeftSide.css'
import { GoHome } from "react-icons/go";
import {IoIosNotificationsOutline} from "react-icons/io";
import {IoSearchOutline} from "react-icons/io5";
import {BiMessageSquareDetail} from "react-icons/bi";
import {Link} from "react-router-dom";

const LeftSide = () => {
    return (
        <div className={'left-side-container'}>
            <Link to={'/'} className='nav-logo-container'>
                Can't name it yet!
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
        </div>
    )
}

export default LeftSide