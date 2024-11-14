import './Messages.css'
import { RiSendPlaneLine } from "react-icons/ri";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import NewMessage from "../../components/NewMessage/NewMessage.jsx";
import { useAuth } from "../../hooks/AuthContext.jsx";

const Messages = () => {
    const [isNewMessageVisible, setNewMessageVisible] = useState(false)
    const { navigate } = useAuth()

    const handleMessageOpen = () => {
        navigate("/messages/userId")
    }

    const handleToggleCreateNewMessage = () => {
        setNewMessageVisible(!isNewMessageVisible)
    }

    return (
        <section className="messages-section">
            <div className='messages-container'>
                <div className="user-container">
                    <span>{'hakanakyuz'}</span>
                    <RiSendPlaneLine onClick={handleToggleCreateNewMessage}/>
                </div>
                {isNewMessageVisible && <NewMessage closeNewMessage={handleToggleCreateNewMessage} />}
                <div className="user-message-container">
                    <div className="user-message">
                        <div className='message-user-info-container' onClick={handleMessageOpen}>
                            <span>PP</span>
                            <div className='messages-info-container'>
                                <span>{'johnwick'}</span>
                                <span>{'hello world! ....'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet/>
        </section>
    )
}

export default Messages