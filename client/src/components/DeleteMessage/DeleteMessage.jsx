import './DeleteMessage.css'

const DeleteMessage = ({ closeModal }) => {
    return (
        <div className="semi-background-modal-overlay" onClick={closeModal}>
            <div className="delete-message-modal-content" onClick={(e) => e.stopPropagation()}>
                <button>Delete</button>
                <button onClick={closeModal}>Cancel</button>
            </div>
        </div>
    )
}

export default DeleteMessage