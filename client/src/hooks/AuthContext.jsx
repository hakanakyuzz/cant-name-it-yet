import { createContext, useContext, useEffect, useState } from "react";
import { tokenRefresh } from "../utils/api.js";
import { useLocation } from "react-router-dom";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null)
    const location = useLocation()

    const initializeToken = async () => {
        try {
            const response = await tokenRefresh()

            setAccessToken(response)
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

    return (
        <AuthContext.Provider value={{ accessToken, setAccessToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)