import './Information.css'

const Information = ({ closeModal }) => {
    return (
        <div className="information-modal-overlay" onClick={closeModal}>
            <div className="information-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="information-model-header">
                    <span>Delete The Chat</span>
                </div>
            </div>
        </div>
    )
}

export default Information