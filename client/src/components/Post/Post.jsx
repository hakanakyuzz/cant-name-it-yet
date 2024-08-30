import './Post.css'
import UserInfo from "../UserInfo/UserInfo.jsx";
import {CiHeart} from "react-icons/ci";
import {LiaShareSolid} from "react-icons/lia";


const Post = () => {
    return (
        <div className='post-container'>
            <div className='post'>
                <UserInfo />
                <div className='content-container'>
                    In linguistics and grammar, a sentence is a linguistic expression, such as the English
                    example "The quick brown fox jumps over the lazy dog." In traditional grammar, it is
                    typically defined as a string of words that expresses a complete thought, or as a unit
                    consisting of a subject and predicate
                </div>
                <div className='like-share-container'>
                    <CiHeart />
                    <LiaShareSolid />
                </div>
                <div className='post-owner'>
                    hakanakyuz In linguistics and grammar, a sentence is a linguistic expression
                </div>
                <div className='comment-container'>
                    view all 70 comments
                </div>
            </div>
            <div className="post">
                <UserInfo />
                <div className='content-container'>
                    In linguistics and grammar, a sentence is a linguistic expression, such as the English
                    example "The quick brown fox jumps over the lazy dog." In traditional grammar, it is
                    typically defined as a string of words that expresses a complete thought, or as a unit
                    consisting of a subject and predicate
                    In linguistics and grammar, a sentence is a linguistic expression, such as the English
                    example "The quick brown fox jumps over the lazy dog." In traditional grammar, it is
                    typically defined as a string of words that expresses a complete thought, or as a unit
                    consisting of a subject and predicate
                    In linguistics and grammar, a sentence is a linguistic expression, such as the English
                    example "The quick brown fox jumps over the lazy dog." In traditional grammar, it is
                    typically defined as a string of words that expresses a complete thought, or as a unit
                    consisting of a subject and predicate
                </div>
                <div className='like-share-container'>
                    <CiHeart />
                    <LiaShareSolid />
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