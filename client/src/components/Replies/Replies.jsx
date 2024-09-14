import './Replies.css'
import {Link} from "react-router-dom";
import {CiHeart} from "react-icons/ci";

const Replies = () => {
    return (
        <div className="replies-container">
            <div className='replies-inner-container'>
                <Link to={`/profile`} className='comment-on-post-profile-picture-container'>
                    PP
                </Link>
                <div className='replier-info-container'>
                    <Link to={`/profile`}>
                        {
                            <span>
                                hakanakyuz2
                            </span>
                        }
                    </Link>
                    {
                        <span>
                            In linguistics and grammar, a sentence is a linguistic expression
                        </span>
                    }
                    <div className='replies-inner-info-container'>
                        {
                            <span>
                                7h
                            </span>
                        }
                        {
                            <span>
                                3 Like
                            </span>
                        }
                        {
                            <span>
                                Reply
                            </span>
                        }
                    </div>
                </div>
                <CiHeart className='replies-like'/>
            </div>
        </div>
    )
}

export default Replies