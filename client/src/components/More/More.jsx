import './More.css'
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext.jsx";
import { userLogout } from "../../utils/api.js";

const More = ({ closeModal }) => {
    const { accessToken, setAccessToken, setUserId, setAuthenticated } = useAuth()

    const handleLogoutClick = async () => {
        await userLogout(accessToken)
        setAccessToken(null)
        setUserId(null)
        setAuthenticated(false)
        closeModal()
    }

    return (
        <div className="more-modal-overlay" onClick={closeModal}>
            <div className="more-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="more-model-header">
                    <Link className='more-user-info-container' to={`/hakanakyuz`}>
                        <div className='more-profile-picture-container'>
                            PP
                        </div>
                        <div className='more-info-container'>
                            <div className={`more-profile-nickname`}>
                                hakanakyuz
                            </div>
                            <span >Hakan Akyüz</span>
                        </div>
                    </Link>
                </div>
                <div className="more-model-header" onClick={handleLogoutClick}>
                    <span>Log out</span>
                </div>
            </div>
        </div>
    )
}

export default More