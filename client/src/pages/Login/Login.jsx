import './Login.css'
import Footer from "../../components/Footer/Footer.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [nickname, setNickname] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Nickname:", nickname)
        console.log("Password:", password)
    }

    return (
        <div className='login-container'>
            <div className='login-inner-container'>
                <div className='login-logo'>Can't Name It Yet!</div>
                <div className='login-info-container'>
                    <form onSubmit={handleSubmit}>
                        <div className='login-input-container'>
                            <input
                                type="text"
                                id="nickname"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                                placeholder="Username or email"
                                required
                            />
                        </div>
                        <div className='login-input-container'>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />
                        </div>
                        <button className='login-button' type="submit">Log in</button>
                    </form>
                </div>
                <div className='login-forget-container'>
                    <div className='login-forget'>Forget password?</div>
                    <div className='login-have-account'>Don't have an account? <Link to='/register'>Sign up</Link></div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Login