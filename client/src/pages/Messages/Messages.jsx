import './Messages.css'
import {RiSendPlaneLine} from "react-icons/ri";
import {Outlet} from "react-router-dom";

const Messages = () => {
    return (
        <section className="messages-section">
            <div className='messages-container'>
                <div className="user-container">
                    <span>hakanakyuz</span>
                    <RiSendPlaneLine/>
                </div>
                <div className="user-message-container">
                    <div className="user-message">
                        <div className='message-user-info-container'>
                            <span>PP</span>
                            <div className='messages-info-container'>
                                <span>hakanakyuz</span>
                                <span>hello world! ....</span>
                            </div>
                        </div>
                    </div>
                    <div className="user-message">
                        <div className='message-user-info-container'>
                            <span>PP</span>
                            <div className='messages-info-container'>
                                <span>hakanakyuz</span>
                                <span>hello world! ....</span>
                            </div>
                        </div>
                    </div>
                    <div className="user-message">
                        <div className='message-user-info-container'>
                            <span>PP</span>
                            <div className='messages-info-container'>
                                <span>hakanakyuz</span>
                                <span>hello world! ....</span>
                            </div>
                        </div>
                    </div>
                    <div className="user-message">
                        <div className='message-user-info-container'>
                            <span>PP</span>
                            <div className='messages-info-container'>
                                <span>hakanakyuz</span>
                                <span>hello world! ....</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </section>
    )
}

export default Messages