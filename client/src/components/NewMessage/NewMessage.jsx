import './NewMessage.css'
import {useState} from "react";

const NewMessage = ({closeNewMessage}) => {
    const users = ['hakanakyuz', 'johndoe', 'janesmith', 'user123', 'cooluser', 'chatguy']

    const [searchUser, setSearchUser] = useState('')
    const [selectedUser, setSelectedUser] = useState(null)


    const handleInputChange = (e) => {
        setSearchUser(e.target.value)
    }

    const filteredUsers = users.filter((user) =>
        user.toLowerCase().includes(searchUser.toLowerCase())
    )

    const handleUserSelect = (user) => {
        setSelectedUser(user)
        setSearchUser('')
    }

    const handleUserUnSelect = (e) => {
        e.preventDefault()
        setSelectedUser(null)
    }

    return (
        <div className="new-message-modal-overlay" onClick={closeNewMessage}>
            <div
                className="new-message-modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="new-message-modal-inner-overlay">
                    <div className="new-message-model-header">
                        <span>New Message</span>
                        <button className="new-message-close-btn" onClick={closeNewMessage}>
                            &times;
                        </button>
                    </div>
                    <form>
                        {selectedUser ? (
                            <button className='selected-user' onClick={handleUserUnSelect}>
                                <span>{selectedUser}</span>
                                <div className='selected-user-close-btn' >&times;</div>
                            </button>
                        ) : null}
                        <input
                            disabled={!!selectedUser}
                            placeholder={selectedUser ? '' : 'Type a name...'}
                            className="new-message-input-area"
                            value={searchUser}
                            onChange={handleInputChange}
                        ></input>
                    </form>
                    {searchUser && !selectedUser && (
                        <ul className="user-suggestions">
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map((user, index) => (
                                    <li
                                        key={index}
                                        className='user-suggestion-item'
                                        onClick={() => handleUserSelect(user)}
                                    >
                                        <div className='new-message-user-info-container'>
                                            <div className='new-message-profile-picture-container'>
                                                PP
                                            </div>
                                            <div className='new-message-info-container'>
                                                <div>{user}</div>
                                                <span>Hakan Akyüz</span>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <li className="no-user-found">No user found!</li>
                            )}
                        </ul>
                    )}
                </div>
                <button
                    className={`new-message-share-btn ${selectedUser ? '' : 'new-message-share-btn-disabled'}`}
                    type="submit"
                    disabled={!selectedUser}
                >
                    Start the chat
                </button>
            </div>
        </div>
    )
}

export default NewMessage