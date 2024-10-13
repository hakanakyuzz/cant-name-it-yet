import './Register.css'
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer.jsx";
import { useState } from "react";

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Email:", email)
        console.log("Password:", password)
        console.log("Name:", name)
        console.log("Username:", username)
    }

    return (
        <div className='register-container'>
            <div className='register-inner-container'>
                <div className='register-logo'>Can't Name It Yet!</div>
                <div className='register-info-container'>
                    <form onSubmit={handleSubmit}>
                        <div className='register-input-container'>
                            <input
                                type="text"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className='register-input-container'>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className='register-input-container'>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className='register-input-container'>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                                required
                            />
                        </div>
                        <button className='register-button' type="submit">Sign up</button>
                    </form>
                </div>
                <div className='register-have-account'>Have an account?<Link to='/login'> Log in</Link></div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Register