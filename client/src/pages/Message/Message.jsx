import './Message.css'
import UserInfo from "../../components/UserInfo/UserInfo.jsx";
import {IoIosInformationCircleOutline} from "react-icons/io";
import {useEffect, useRef} from "react";

const Message = () => {
    const chatContainerRef = useRef(null)

    useEffect(() => {
        if (chatContainerRef.current)
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }, [])

    return (
        <div className='message-container'>
            <div className="message-top">
                <UserInfo />
                <IoIosInformationCircleOutline />
            </div>
            <div className="chat-container" ref={chatContainerRef}>
                <div className='sends'>
                    <div className='sends-from-user from-other'>
                        <span>PP</span>
                        <div className='sends-from-user-message'>
                            sends-from-other-message-1
                            sends-from-user
                        </div>
                    </div>
                    <div className='sends-from-user from-user'>
                        <span>PP</span>
                        <div className='sends-from-user-message'>
                            sends-from-user-message-2
                            sends-from-user
                        </div>
                    </div>
                    <div className='sends-from-user from-other'>
                        <span>PP</span>
                        <div className='sends-from-user-message'>
                            sends-from-other-message-3
                            sends-from-user
                        </div>
                    </div>
                    <div className='sends-from-user from-user'>
                        <span>PP</span>
                        <div className='sends-from-user-message'>
                            sends-from-user-message-4
                            sends-from-user
                        </div>
                    </div>
                    <div className='sends-from-user from-other'>
                        <span>PP</span>
                        <div className='sends-from-user-message'>
                            sends-from-other-message-5
                            sends-from-user
                        </div>
                    </div>
                    <div className='sends-from-user from-user'>
                        <span>PP</span>
                        <div className='sends-from-user-message'>
                            sends-from-user-message-6
                            sends-from-user
                        </div>
                    </div>
                    <div className='sends-from-user from-user'>
                        <span>PP</span>
                        <div className='sends-from-user-message'>
                            sends-from-user-message-7
                            sends-from-user
                        </div>
                    </div>
                    <div className='sends-from-user from-other'>
                        <span>PP</span>
                        <div className='sends-from-user-message'>
                            sends-from-other-message-3
                            sends-from-user
                        </div>
                    </div>
                    <div className='sends-from-user from-user'>
                        <span>PP</span>
                        <div className='sends-from-user-message'>
                            sends-from-user-message-4
                            sends-from-user
                        </div>
                    </div>
                    <div className='sends-from-user from-other'>
                        <span>PP</span>
                        <div className='sends-from-user-message'>
                            sends-from-other-message-5
                            sends-from-user
                        </div>
                    </div>
                    <div className='sends-from-user from-user'>
                        <span>PP</span>
                        <div className='sends-from-user-message'>
                            sends-from-user-message-6
                            sends-from-user
                        </div>
                    </div>
                    <div className='sends-from-user from-user'>
                        <span>PP</span>
                        <div className='sends-from-user-message'>
                            sends-from-user-message-7
                            sends-from-user
                        </div>
                    </div>
                    <div className='sends-from-user from-other'>
                        <span>PP</span>
                        <div className='sends-from-user-message'>
                            sends-from-other-message-3
                            sends-from-user
                        </div>
                    </div>
                    <div className='sends-from-user from-user'>
                        <span>PP</span>
                        <div className='sends-from-user-message'>
                            sends-from-user-message-4
                            sends-from-user
                        </div>
                    </div>
                    <div className='sends-from-user from-other'>
                        <span>PP</span>
                        <div className='sends-from-user-message'>
                            sends-from-other-message-5
                            sends-from-user
                        </div>
                    </div>
                    <div className='sends-from-user from-user'>
                        <span>PP</span>
                        <div className='sends-from-user-message'>
                            sends-from-user-message-6
                            sends-from-user
                        </div>
                    </div>
                    <div className='sends-from-user from-user'>
                        <span>PP</span>
                        <div className='sends-from-user-message'>
                            sends-from-user-message-7
                            sends-from-user
                        </div>
                    </div>
                </div>
                <div className="send-container">
                    <input type="text" placeholder='Message...'/>
                    <span>Send</span>
                </div>
            </div>
        </div>
    )
}

export default Message