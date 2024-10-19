import './Login.css'
import Footer from "../../components/Footer/Footer.jsx";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../utils/api.js";
import { useAuth } from "../../hooks/AuthContext.jsx";

const Login = () => {
    const { setAccessToken } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response  = await userLogin(email, password)

            setAccessToken(response)
            navigate('/')
        } catch (err) {
            console.log(err, 'Login failed. Please check your credentials.')
        }
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
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