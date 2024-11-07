import { createContext, useContext, useEffect, useState } from "react";
import { tokenRefresh } from "../utils/api.js";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [userId, setUserId] = useState(null)
    const [accessToken, setAccessToken] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(null)
    const [isAuthenticated, setAuthenticated] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    const notLoginOrRegister = location.pathname !== '/login' && location.pathname !== '/register'

    const initializeToken = async () => {
        try {
            setLoading(true)
            const response = await tokenRefresh()

            setAccessToken(response.newAccessToken)
            setUserId(response.userId)
            setAuthenticated(true)
        } catch (err) {
            console.log('Failed to initialize access token!', err)
            setError(err)
            setAuthenticated(false)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (notLoginOrRegister)
            initializeToken()
                .then(null)
                .catch(err => console.log(err))
        else
            setLoading(false)
    }, [])

    useEffect(() => {
        console.log("Access Token Changed:", accessToken)
    }, [accessToken])

    useEffect(() => {
        console.log("User Changed:", userId)
    }, [userId])

    useEffect(() => {
        console.log("User authenticated:", isAuthenticated)
    }, [isAuthenticated])

    return (
        <AuthContext.Provider value={{
            userId,
            accessToken,
            isLoading,
            isError,
            isAuthenticated,
            setUserId,
            setAccessToken,
            setLoading,
            setError,
            setAuthenticated,
            navigate
        }}>
            {!isLoading && children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)