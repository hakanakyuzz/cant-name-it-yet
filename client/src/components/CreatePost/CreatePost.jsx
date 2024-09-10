import './CreatePost.css'
import {useState} from "react";

const CreatePost = ({ closeModal }) => {
    const [postContent, setPostContent] = useState('')

    const handleInputChange = (e) => {
        setPostContent(e.target.value)
    }
    
    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="model-header">
                    <span>Create New Post</span>
                    {postContent && (
                        <button className="share-btn" type="submit">
                            Share
                        </button>
                    )}
                </div>
                <form>
                    <textarea
                        placeholder="Write your post here..."
                        className="text-area"
                        value={postContent}
                        onChange={handleInputChange}
                    ></textarea>
                </form>
                <button className="close-btn" onClick={closeModal}>&times;</button>
            </div>
        </div>
    )
}

export default CreatePost