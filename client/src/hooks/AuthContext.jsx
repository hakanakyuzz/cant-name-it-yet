import { createContext, useContext, useEffect, useState } from "react";
import { tokenRefresh, userLogout } from "../utils/api.js";

const AuthContext = createContext(null)

let globalSetAccessToken

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null)

    globalSetAccessToken = setAccessToken

    const handleLogout = async () => {
        //you can create a new variable to store the access token and use it inside logoutUser function
        try {
            await userLogout(accessToken)
        } catch (err) {
            console.log("Logout failed!", err)
            return false
        }

        setAccessToken(null)
    }

    useEffect(() => {
        console.log("Access Token Changed:", accessToken)
    }, [accessToken])

    return (
        <AuthContext.Provider value={{ accessToken, setAccessToken, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const setGlobalAccessToken = (token) => {
    if (globalSetAccessToken)
        globalSetAccessToken(token)
    else
        console.error("setGlobalAccessToken is not initialized.")
}

export const AuthInitializer = ({ children }) => {
    const initializeToken = async () => {
        try {
            await tokenRefresh()
        } catch (err) {
            console.log('Failed to initialize access token!', err)
        }
    }

    useEffect(() => {
        initializeToken()
            .then(null)
            .catch((err) => console.log(err))
    }, [])

    return <>{children}</>
}

export const useAuth = () => useContext(AuthContext)