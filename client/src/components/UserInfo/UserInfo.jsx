import './UserInfo.css'
import {Link, useLocation} from "react-router-dom";

const UserInfo = () => {
    const location = useLocation()
    const currentPath = location.pathname
    const isMessage = currentPath.startsWith('/messages')

    return (
        <div className='user-info-container'>
            <Link to={`/profile`} className='profile-picture-container'>
                PP
            </Link>
            <div className='info-container'>
                <Link to={`/profile`} className = {`profile-nickname ${isMessage ? 'profile-nickname-message-open' : ''} `}>
                    hakanakyuz
                </Link>
                <span className={`${isMessage ? 'profile-name-message-open' : ''}`}>Hakan Akyüz</span>
            </div>
        </div>
    )
}

export default UserInfo