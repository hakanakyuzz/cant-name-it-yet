import './More.css'
import UserInfo from "../UserInfo/UserInfo.jsx";
import { Link } from "react-router-dom";

const More = ({closeModal}) => {
    return (
        <div className="more-modal-overlay" onClick={closeModal}>
            <div className="more-modal-content" onClick={(e) => e.stopPropagation()}>
                <Link to={'/hakanakyuz'} className="more-model-header">
                    <UserInfo />
                </Link>
                <div className="more-model-header">
                    <span>Log out</span>
                </div>
            </div>
        </div>
    )
}

export default More