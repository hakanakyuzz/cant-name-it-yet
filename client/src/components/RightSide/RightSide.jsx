import './RightSide.css'
import {Link} from "react-router-dom";

const RightSide = () => {
    return (
        <div className='right-side-container'>
                <Link to={'/profile'} className='profile-picture-container'>
                    Profile Photo
                </Link>
                <div className='info-container'>
                    <Link to={'/profile'}>
                        hakanakyuz
                    </Link>
                    <span>Hakan Akyüz</span>
                </div>
        </div>
    )
}

export default RightSide