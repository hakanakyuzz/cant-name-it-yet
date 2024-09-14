import './Post.css'
import UserInfo from "../UserInfo/UserInfo.jsx";
import {CiHeart} from "react-icons/ci";
import {LiaShareSolid} from "react-icons/lia";
import {useEffect, useState} from "react";
import CommentOnPost from "../CommentOnPost/CommentOnPost.jsx";


const Post = () => {
    const [isCommentOnPostVisible, setCommentOnPostVisible] = useState(false)

    const handleCommentOnPostVisible = () => {
        setCommentOnPostVisible(!isCommentOnPostVisible)
    }

    useEffect(() => {
        isCommentOnPostVisible ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""

    }, [isCommentOnPostVisible])

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
                    <span>hakanakyuz</span> In linguistics and grammar, a sentence is a linguistic expression
                </div>
                <div className='post-comment-container' onClick={handleCommentOnPostVisible}>
                    view all <span>{70}</span> comments
                </div>
                {isCommentOnPostVisible && <CommentOnPost closeCommentOnPost={handleCommentOnPostVisible} />}
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