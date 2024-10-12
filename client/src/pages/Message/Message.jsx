import './Message.css'
import UserInfo from "../../components/UserInfo/UserInfo.jsx";
import {IoIosInformationCircleOutline} from "react-icons/io";
import {useEffect, useRef, useState} from "react";
import Information from "../../components/Information/Information.jsx";
import {BsThreeDotsVertical} from "react-icons/bs";
import DeleteMessage from "../../components/DeleteMessage/DeleteMessage.jsx";

const Message = () => {
    const chatContainerRef = useRef(null)

    useEffect(() => {
        if (chatContainerRef.current)
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }, [])

    const [isInformationVisible, setInformationVisible] = useState(false)
    const handleInformationVisible = () => {
        setInformationVisible(!isInformationVisible)
    }

    const [isDeleteMessageVisible, setDeleteMessageVisible] = useState(false)
    const toggleDeleteCommentVisible = () => {
        setDeleteMessageVisible(!isDeleteMessageVisible)
    }

    return (
        <div className='message-container'>
            <div className="message-top">
                <UserInfo />
                <div className='message-top-info-container'>
                    <IoIosInformationCircleOutline onClick={handleInformationVisible}/>
                    {isInformationVisible && <Information closeModal={handleInformationVisible} />}
                </div>
            </div>
            <div className="chat-container" ref={chatContainerRef}>
                <div className='sends'>
                    <div className="send">
                        <div className='other-pp'>pp</div>
                        <div className='sends-from-user from-other'>
                            <div className='sends-from-user-message'>
                                sends-from-other-message-1
                                sends-from-user
                            </div>
                        </div>
                        <div>
                            <BsThreeDotsVertical
                                className='message-three-dots'
                                onClick={toggleDeleteCommentVisible}
                            />
                            {isDeleteMessageVisible && (
                                <DeleteMessage closeModal={toggleDeleteCommentVisible}/>
                            )}
                        </div>
                    </div>
                    <div className='sends-from-user from-user'>
                        <span>PP</span>
                        <div className='sends-from-user-message'>
                            sends-from-user-message-2
                            sends-from-user
                        </div>
                    </div>
                    <div className="send">
                        <div className='other-pp'>pp</div>
                        <div className='sends-from-user from-other'>
                            <div className='sends-from-user-message'>
                                sends-from-other-message-1
                                sends-from-user
                            </div>
                        </div>
                        <div>
                            <BsThreeDotsVertical
                                className='message-three-dots'
                                onClick={toggleDeleteCommentVisible}
                            />
                            {isDeleteMessageVisible && (
                                <DeleteMessage closeModal={toggleDeleteCommentVisible}/>
                            )}
                        </div>
                    </div>
                    <div className='sends-from-user from-user'>
                        <span>PP</span>
                        <div className='sends-from-user-message'>
                            sends-from-user-message-4
                            sends-from-user
                        </div>
                    </div>
                    <div className="send">
                        <div className='other-pp'>pp</div>
                        <div className='sends-from-user from-other'>
                            <div className='sends-from-user-message'>
                                sends-from-other-message-1
                                sends-from-user
                            </div>
                        </div>
                        <div>
                            <BsThreeDotsVertical
                                className='message-three-dots'
                                onClick={toggleDeleteCommentVisible}
                            />
                            {isDeleteMessageVisible && (
                                <DeleteMessage closeModal={toggleDeleteCommentVisible}/>
                            )}
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
                    <div className="send">
                        <div className='other-pp'>pp</div>
                        <div className='sends-from-user from-other'>
                            <div className='sends-from-user-message'>
                                sends-from-other-message-1
                                sends-from-user
                            </div>
                        </div>
                        <div>
                            <BsThreeDotsVertical
                                className='message-three-dots'
                                onClick={toggleDeleteCommentVisible}
                            />
                            {isDeleteMessageVisible && (
                                <DeleteMessage closeModal={toggleDeleteCommentVisible}/>
                            )}
                        </div>
                    </div>
                    <div className='sends-from-user from-user'>
                        <span>PP</span>
                        <div className='sends-from-user-message'>
                            sends-from-user-message-4
                            sends-from-user
                        </div>
                    </div>
                    <div className="send">
                        <div className='other-pp'>pp</div>
                        <div className='sends-from-user from-other'>
                            <div className='sends-from-user-message'>
                                sends-from-other-message-1
                                sends-from-user
                            </div>
                        </div>
                        <div>
                            <BsThreeDotsVertical
                                className='message-three-dots'
                                onClick={toggleDeleteCommentVisible}
                            />
                            {isDeleteMessageVisible && (
                                <DeleteMessage closeModal={toggleDeleteCommentVisible}/>
                            )}
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
                    <div className="send">
                        <div className='other-pp'>pp</div>
                        <div className='sends-from-user from-other'>
                            <div className='sends-from-user-message'>
                                sends-from-other-message-1
                                sends-from-user
                            </div>
                        </div>
                        <div>
                            <BsThreeDotsVertical
                                className='message-three-dots'
                                onClick={toggleDeleteCommentVisible}
                            />
                            {isDeleteMessageVisible && (
                                <DeleteMessage closeModal={toggleDeleteCommentVisible}/>
                            )}
                        </div>
                    </div>
                    <div className='sends-from-user from-user'>
                        <span>PP</span>
                        <div className='sends-from-user-message'>
                            sends-from-user-message-4
                            sends-from-user
                        </div>
                    </div>
                    <div className="send">
                        <div className='other-pp'>pp</div>
                        <div className='sends-from-user from-other'>
                            <div className='sends-from-user-message'>
                                sends-from-other-message-1
                                sends-from-user
                            </div>
                        </div>
                        <div>
                            <BsThreeDotsVertical
                                className='message-three-dots'
                                onClick={toggleDeleteCommentVisible}
                            />
                            {isDeleteMessageVisible && (
                                <DeleteMessage closeModal={toggleDeleteCommentVisible}/>
                            )}
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