import './UserInfo.css'
import {Link} from "react-router-dom";

const UserInfo = () => {
    return (<div className='user-info-container'>
        <Link to={'/profile'} className='profile-picture-container'>
            PP
        </Link>
        <div className='info-container'>
            <Link to={'/profile'}>
                hakanakyuz
            </Link>
            <span>Hakan Akyüz</span>
        </div>
    </div>)
}

export default UserInfo