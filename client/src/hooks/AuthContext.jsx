import { createContext, useContext, useEffect, useState } from "react";
import { tokenRefresh } from "../utils/api.js";
import { useLocation } from "react-router-dom";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [userId, setUserId] = useState(null)
    const [accessToken, setAccessToken] = useState(null)
    const location = useLocation()

    const initializeToken = async () => {
        try {
            const response = await tokenRefresh()

            setAccessToken(response.newAccessToken)
            setUserId(response.userId)
        } catch (err) {
            console.log('Failed to initialize access token!', err)
        }
    }

    useEffect(() => {
        if (location.pathname !== '/login' && location.pathname !== '/register')
            initializeToken()
                .then(null)
                .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        console.log("Access Token Changed:", accessToken)
    }, [accessToken])

    useEffect(() => {
        console.log("User Changed:", userId)
    }, [userId])

    return (
        <AuthContext.Provider value={{ accessToken, setAccessToken, userId, setUserId }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)