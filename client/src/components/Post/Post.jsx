import './Post.css'
import UserInfo from "../UserInfo/UserInfo.jsx";
import {CiHeart} from "react-icons/ci";
import {LiaShareSolid} from "react-icons/lia";
import CommentOnPost from "../CommentOnPost/CommentOnPost.jsx";
import useToggleVisibility from "../../hooks/useToggleVisibility.jsx";
import {Link} from "react-router-dom";


const Post = () => {
    const [isCommentOnPostVisible, toggleCommentOnPostVisible] = useToggleVisibility(false)

    return (
        <div className='post-container'>
            <div className='post'>
                <UserInfo/>
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
                    view all <span>{70}</span> comments
                </div>
                {isCommentOnPostVisible && <CommentOnPost closeCommentOnPost={toggleCommentOnPostVisible} />}
            </div>
            {/*<div className="post">*/}
            {/*    <UserInfo/>*/}
            {/*    <div className='content-container'>*/}
            {/*        Post 2*/}
            {/*    </div>*/}
            {/*    <div className='like-share-container'>*/}
            {/*        <CiHeart/>*/}
            {/*        <LiaShareSolid/>*/}
            {/*    </div>*/}
            {/*    <div className='post-owner'>*/}
            {/*        hakanakyuz In linguistics and grammar, a sentence is a linguistic expression*/}
            {/*    </div>*/}
            {/*    <div className='comment-container'>*/}
            {/*        {isCommentOnPostVisible && <CommentOnPost closeCommentOnPost={handleCommentOnPostVisible} />}*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="post">*/}
            {/*    <UserInfo/>*/}
            {/*    <div className='content-container'>*/}
            {/*        Post 3*/}
            {/*    </div>*/}
            {/*    <div className='like-share-container'>*/}
            {/*        <CiHeart/>*/}
            {/*        <LiaShareSolid/>*/}
            {/*    </div>*/}
            {/*    <div className='post-owner'>*/}
            {/*        hakanakyuz In linguistics and grammar, a sentence is a linguistic expression*/}
            {/*    </div>*/}
            {/*    <div className='comment-container'>*/}
            {/*        {isCommentOnPostVisible && <CommentOnPost closeCommentOnPost={handleCommentOnPostVisible} />}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}
export default Post