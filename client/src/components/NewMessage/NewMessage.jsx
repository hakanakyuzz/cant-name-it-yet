import './NewMessage.css'
import {useState} from "react";

const NewMessage = ({closeNewMessage}) => {

    const [newMessageUserContent, setNewMessageUserContent] = useState('')
    const [selectedUser, setSelectedUser] = useState(null)

    const users = ['hakanakyuz', 'johndoe', 'janesmith', 'user123', 'cooluser', 'chatguy'];

    const handleInputChange = (e) => {
        setNewMessageUserContent(e.target.value)
    }

    const filteredUsers = users.filter((user) =>
        user.toLowerCase().includes(newMessageUserContent.toLowerCase())
    )

    const handleUserSelect = (user) => {
        setSelectedUser(user)
        setNewMessageUserContent(user)
    }

    return (
        <div className="new-message-modal-overlay" onClick={closeNewMessage}>
            <div className="new-message-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="new-message-modal-inner-overlay">
                    <div className="new-message-model-header">
                        <span>New Message</span>
                        <button className="new-message-close-btn" onClick={closeNewMessage}>&times;</button>
                    </div>
                    <form>
                        <input
                            placeholder="Type a name..."
                            className="new-message-input-area"
                            value={newMessageUserContent}
                            onChange={handleInputChange}
                        ></input>
                    </form>
                    {newMessageUserContent && !selectedUser && (
                        <ul className="user-suggestions">
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map((user, index) => (
                                    <li
                                        key={index}
                                        className="user-suggestion-item"
                                        onClick={() => handleUserSelect(user)}
                                    >
                                        <div>PP</div>{user}
                                    </li>
                                ))
                            ) : (
                                <li className="no-user-found">No user found</li>
                            )}
                        </ul>
                    )}
                </div>
                <button className={`new-message-share-btn ${selectedUser ? '' : 'new-message-share-btn-disabled'}`} type="submit">
                    Start the chat
                </button>
            </div>
        </div>
    )
}

export default NewMessage