import './CommentOnPost.css'
import {Link} from "react-router-dom";
import Comments from "../Comments/Comments.jsx";
import {useState} from "react";

const CommentOnPost = ({ closeCommentOnPost }) => {
    const [commentTerm, setCommentTerm] = useState('')

    return (
        <div className="comment-on-post-modal-overlay" onClick={closeCommentOnPost}>
            <div className="comment-on-post-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="comment-on-post-left-side">
                    <div className='comment-on-post-content-container'>
                        Post 1
                    </div>
                </div>
                <div className="comment-on-post-right-side">
                    <div className='comment-on-post-user-info-container'>
                        <Link to={`/profile`} className='comment-on-post-profile-picture-container'>
                            PP
                        </Link>
                        <div className='comment-on-post-info-container'>
                            <div className='comment-on-post-profile-nickname'>
                                <Link to={`/profile`}>
                                    <span>{'hakanakyuz1'}</span>
                                </Link>
                                <span>
                                    {'In linguistics and grammar, a sentence is a linguistic expression. In linguistics and grammar, a sentence is a linguistic expression'}
                                </span>
                            </div>
                            <span>{'1h'}</span>
                        </div>
                    </div>
                    <Comments />
                    <div className='comment-on-post-post'>
                        <input
                            type="text"
                            placeholder='Add a comment...'
                            value={commentTerm} onChange={(e) => setCommentTerm(e.target.value)}
                        />
                        <div>Send</div>
                    </div>
                </div>
            </div>
            <button className="comment-on-post-close-btn" onClick={closeCommentOnPost}>&times;</button>
        </div>
    )
}

export default CommentOnPost