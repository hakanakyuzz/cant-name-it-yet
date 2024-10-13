import './DeletePost.css'
import { useState } from "react";
import CreatePost from "../CreatePost/CreatePost.jsx";

const DeletePost = ({ closeModal }) => {
    const [isUpdateFieldVisible, setUpdateFieldVisible] = useState(false)

    const toggleUpdateFieldVisible = () => {
        setUpdateFieldVisible(!isUpdateFieldVisible)
    }

    return (
        <div className="semi-background-modal-overlay" onClick={closeModal}>
            <div className="delete-post-modal-content" onClick={(e) => e.stopPropagation()}>
                <button>Delete</button>
                <button onClick={toggleUpdateFieldVisible}>Edit</button>
                <button onClick={closeModal}>Cancel</button>
                {isUpdateFieldVisible && (
                    <CreatePost closeModal={toggleUpdateFieldVisible}/>
                )}
            </div>
        </div>
    )
}

export default DeletePost