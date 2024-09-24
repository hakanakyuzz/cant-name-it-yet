import './Comments.css'
import {Link} from "react-router-dom";
import {CiHeart} from "react-icons/ci";
import {useState} from "react";
import Replies from "../Replies/Replies.jsx";

const Comments = () => {
    const [showReplies, setShowReplies] = useState(false)
    const handleShowReplies = () => {
        setShowReplies(!showReplies)
    }

    return (
        <div className='comments-container'>
            <div className='comment'>
                <div className='commenter-container'>
                    <Link to={`/profile`} className='comments-profile-picture-container'>
                        PP
                    </Link>
                    <div className='commenter-info-container'>
                        <div className="commenter-info-inner-container">
                            <Link to={`/johnwick`}>
                                <span>
                                    {'johnwick '}
                                </span>
                            </Link>
                            <span>
                                {'In linguistics and grammar, a sentence is a linguistic expression'}
                            </span>
                        </div>
                        <div className='comments-info-container'>
                            <span>{'7h'}</span>
                            <span>{3} Like</span>
                            <span>Reply</span>
                        </div>
                        <div className='view-replies'>
                            <span onClick={handleShowReplies}>View replies ({'2'})</span>
                        </div>
                    </div>
                    <CiHeart className='comments-like'/>
                </div>
                {
                    showReplies && <Replies/>
                }
            </div>
        </div>
    )
}

export default Comments