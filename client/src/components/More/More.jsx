import './More.css'

const More = ({closeModal}) => {
    return (
        <div className="more-modal-overlay" onClick={closeModal}>
            <div className="more-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="more-model-header">
                    <span>Log out</span>
                </div>
            </div>
        </div>
    )
}

export default More