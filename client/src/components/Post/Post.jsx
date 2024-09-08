import './Post.css'
import UserInfo from "../UserInfo/UserInfo.jsx";
import {CiHeart} from "react-icons/ci";
import {LiaShareSolid} from "react-icons/lia";


const Post = () => {
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
                <div className='comment-container'>
                    view all 70 comments
                </div>
            </div>
            <div className="post">
                <UserInfo/>
                <div className='content-container'>
                    Post 2
                </div>
                <div className='like-share-container'>
                    <CiHeart/>
                    <LiaShareSolid/>
                </div>
                <div className='post-owner'>
                    hakanakyuz In linguistics and grammar, a sentence is a linguistic expression
                </div>
                <div className='comment-container'>
                    view all 70 comments
                </div>
            </div>
            <div className="post">
                <UserInfo/>
                <div className='content-container'>
                    Post 3
                </div>
                <div className='like-share-container'>
                    <CiHeart/>
                    <LiaShareSolid/>
                </div>
                <div className='post-owner'>
                    hakanakyuz In linguistics and grammar, a sentence is a linguistic expression
                </div>
                <div className='comment-container'>
                    view all 70 comments
                </div>
            </div>
            <div className="post">
                <UserInfo/>
                <div className='content-container'>
                    Post 3
                </div>
                <div className='like-share-container'>
                    <CiHeart/>
                    <LiaShareSolid/>
                </div>
                <div className='post-owner'>
                    hakanakyuz In linguistics and grammar, a sentence is a linguistic expression
                </div>
                <div className='comment-container'>
                    view all 70 comments
                </div>
            </div>
            <div className="post">
                <UserInfo/>
                <div className='content-container'>
                    Post 4
                </div>
                <div className='like-share-container'>
                    <CiHeart/>
                    <LiaShareSolid/>
                </div>
                <div className='post-owner'>
                    hakanakyuz In linguistics and grammar, a sentence is a linguistic expression
                </div>
                <div className='comment-container'>
                    view all 70 comments
                </div>
            </div>
        </div>
    )
}
export default Post