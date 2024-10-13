import './Post.css'
import UserInfo from "../UserInfo/UserInfo.jsx";
import { CiHeart } from "react-icons/ci";
import { LiaShareSolid } from "react-icons/lia";
import CommentOnPost from "../CommentOnPost/CommentOnPost.jsx";
import useToggleVisibility from "../../hooks/useToggleVisibility.jsx";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import DeletePost from "../DeletePost/DeletePost.jsx";

const Post = () => {
    const [isCommentOnPostVisible, toggleCommentOnPostVisible] = useToggleVisibility(false)
    const [isDeletePostVisible, setDeletePostVisible] = useState(false)

    const toggleDeletePostVisible = () => {
        setDeletePostVisible(!isDeletePostVisible)
    }

    return (
        <div className='post-container'>
            <div className='post'>
                <div className='post-owner-container'>
                    <UserInfo/>
                    <BsThreeDotsVertical onClick={toggleDeletePostVisible}/>
                    {isDeletePostVisible && (
                        <DeletePost closeModal={toggleDeletePostVisible}/>
                    )}
                </div>
                <div className='content-container'>
                    Post 1
                </div>
                <div className='like-share-container'>
                    <CiHeart/>
                    <LiaShareSolid/>
                </div>
                <div className='post-owner'>
                    <Link to={'/hakanakyuz'}>{'hakanakyuz'}</Link> {'In linguistics and grammar, a sentence is a linguistic expression'}
                </div>
                <div className='post-comment-container' onClick={toggleCommentOnPostVisible}>
                    <div>view all <span className='comment-counter'>{70}</span> comments</div>
                </div>
                {isCommentOnPostVisible && <CommentOnPost closeCommentOnPost={toggleCommentOnPostVisible} />}
            </div>
        </div>
    )
}

export default Post