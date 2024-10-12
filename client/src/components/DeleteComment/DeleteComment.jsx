import './DeleteComment.css'

const DeleteComment = ({ closeModal }) => {
    return (
        <div className="delete-comment-modal-overlay" onClick={closeModal}>
            <div className="delete-comment-modal-content" onClick={(e) => e.stopPropagation()}>
                <button>Delete</button>
                <button onClick={closeModal}>Cancel</button>
            </div>
        </div>
    )
}

export default DeleteComment