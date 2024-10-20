import './Replies.css'
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import DeleteComment from "../DeleteComment/DeleteComment.jsx";
import { useState } from "react";

const Replies = () => {
    const [isDeleteCommentVisible, setDeleteCommentVisible] = useState(false)

    const toggleDeleteCommentVisible = () => {
        setDeleteCommentVisible(!isDeleteCommentVisible)
    }

    return (
        <div className="replies-container">
            <div className="reply">
                <Link to={`/profile`} className='replies-profile-picture-container'>
                    PP
                </Link>
                <div className="replier-info-container">
                    <div className="replier-info-inner-container">
                        <Link to={`/hakanakyuz`}>
                            <span>{'hakanakyuz'}</span>
                        </Link>
                        <span>
                            {'In linguistics and grammar, a sentence is a linguistic expression'}
                        </span>
                    </div>
                    <div className="replies-info-container">
                        <span>{'7h'}</span>
                        <span>{3} Like</span>
                        <span>Reply</span>
                        <div>
                            <BsThreeDots
                                className='three-dots-reply'
                                onClick={toggleDeleteCommentVisible}
                            />
                            {isDeleteCommentVisible &&
                                <DeleteComment closeModal={toggleDeleteCommentVisible}/>
                            }
                        </div>
                    </div>
                </div>
                <CiHeart className='replies-like'/>
            </div>
        </div>
    )
}

export default Replies