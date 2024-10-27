import './Profile.css'
import { Link, useLocation } from "react-router-dom";
import CommentOnPost from "../../components/CommentOnPost/CommentOnPost.jsx";
import useToggleVisibility from "../../hooks/useToggleVisibility.jsx";

const Profile = () => {
    const [isCommentOnPostVisible, toggleCommentOnPostVisible] = useToggleVisibility(false)

    const location = useLocation()
    const currentPath = location.pathname
    const isUserProfile= currentPath === '/hakanakyuz'

        return (
        <div className='profile-container'>
            <div className='profile-user-container'>
                <div className='profile-user-profile-picture' >
                    PP
                </div>
                <div className='profile-user-info-container'>
                    <div className='profile-user-info-section-1'>
                        <span>user</span>
                        {isUserProfile ? (
                            <Link to={`/edit-profile`}>Edit Profile</Link>
                        ) : (
                            <div className='follow-user'>Follow</div>
                        )}

                    </div>
                    <div className='profile-user-info-section-2'>
                        <span>13 Posts</span>
                        <span>217 Followers</span>
                        <span>317 Followers</span>
                    </div>
                    <div className='profile-user-info-section-3'>
                        <Link to={'/login'}>Hakan Akyuz</Link>
                    </div>
                </div>
            </div>
            <div className="profile-post-container">
                <div className='profile-post' onClick={toggleCommentOnPostVisible}>
                    post1
                </div>
                <div className='profile-post' onClick={toggleCommentOnPostVisible}>
                    post2
                </div>
                <div className='profile-post' onClick={toggleCommentOnPostVisible}>
                    post3
                </div>
                {isCommentOnPostVisible && <CommentOnPost closeCommentOnPost={toggleCommentOnPostVisible} />}
            </div>
        </div>
    )
}

export default Profile