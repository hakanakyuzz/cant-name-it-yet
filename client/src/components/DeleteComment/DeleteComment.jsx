import './DeleteComment.css'

const DeleteComment = ({ closeModal }) => {
    return (
        <div className="semi-background-modal-overlay" onClick={closeModal}>
            <div className="delete-comment-modal-content" onClick={(e) => e.stopPropagation()}>
                <button>Delete</button>
                <button>Edit</button>
                <button onClick={closeModal}>Cancel</button>
            </div>
        </div>
    )
}

export default DeleteComment