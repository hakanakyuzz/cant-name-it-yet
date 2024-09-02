import './Message.css'
import UserInfo from "../../components/UserInfo/UserInfo.jsx";
import {IoIosInformationCircleOutline} from "react-icons/io";

const Message = () => {
    return (
        <div className='message-container'>
            <div className="message-top">
                <UserInfo />
                <IoIosInformationCircleOutline />
            </div>
            <div className="message-bottom-continer">
                <div className="chat-container">
                </div>
                <div className="send-container"></div>
            </div>
        </div>
    )
}

export default Message