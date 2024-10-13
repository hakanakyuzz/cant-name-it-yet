import './EditProfile.css'
import { useState } from "react";

const EditProfile = () => {
    const [name, setName] = useState('Hakan Akyüz')
    const [about, setAbout] = useState('Founder of this platform.')
    const [email, setEmail] = useState('legion61614@gmail.com')
    const [username, setUsername] = useState('hakanakyuz')
    const [password, setPassword] = useState('123456')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ name, about, email, username, password })
    }

    return (
        <div className='edit-profile-container'>
            <div className='profile-photo-section'>
                <div className='profile-photo-container'>
                    PP
                </div>
                <div className='profile-edit-info-container'>
                    <span>Hakan Akyüz</span>
                    <div className='change-profile-picture '>Change Profile Picture</div>
                </div>
            </div>
            <div className='edit-profile-section'>
                <form onSubmit={handleSubmit} className="profile-edit-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            className="form-control"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="about">About</label>
                        <textarea
                            id="about"
                            value={about}
                            className="form-control"
                            onChange={(e) => setAbout(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="change-profile-picture">Save Changes</button>
                </form>
                <button className="change-profile-picture delete-this-account">Delete This Account</button>
            </div>
        </div>
    )
}

export default EditProfile