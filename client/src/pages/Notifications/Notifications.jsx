import './Notifications.css'

const Notifications = () => {
    return (
        <div className="notifications-section">
            <ul>
                <li className='notification-list-item'>
                    <div className="notification-info">
                        <div className="notification-info-inside">
                            <div>PP</div>
                            <div className="notification-text">
                                <span className="notification-nickname">
                                    <span>{'hakanakyuz1'} </span>
                                    <span>started following you! </span>
                                    <span>{'1d'}</span>
                                </span>
                            </div>
                        </div>
                        <div className='is-follow'>Follow</div>
                    </div>
                </li>
                <li className='notification-list-item'>
                    <div className="notification-info">
                        <div className="notification-info-inside">
                            <div>PP</div>
                            <div className="notification-text">
                                <span className="notification-nickname">
                                    <span>{'hakanakyuz2'} </span>
                                    <span>blocked you that bastard! </span>
                                    <span>{'5d'}</span>
                                </span>
                            </div>
                        </div>
                        <div className='is-follow'>Follow</div>
                    </div>
                </li>
                <li className='notification-list-item'>
                    <div className="notification-info">
                        <div className="notification-info-inside">
                            <div>PP</div>
                            <div className="notification-text">
                                <span className="notification-nickname">
                                    <span>{'hakanakyuz3'} </span>
                                    <span>started following you! </span>
                                    <span>{'2w'}</span>
                                </span>
                            </div>
                        </div>
                        <div className='is-follow'>Follow</div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Notifications