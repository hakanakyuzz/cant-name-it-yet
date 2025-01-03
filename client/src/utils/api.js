import axios from "axios";

export const api = axios.create({
    baseURL : "http://localhost:8002/api",
    withCredentials: true
})

export const userLogin = async (email, password) => {
    try {
        const response = await api.post('/user/login', { email, password })
        const { accessToken, user } = response.data
        const userId = user._id

        return { accessToken, userId }
    } catch (err) {
        console.log('Error during login!', err)
        throw err
    }
}

export const userLogout = async (token) => {
    try {
        await api.post('/user/logout', {}, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return true
    } catch (err) {
        console.log('Error during logout!', err)
        throw err
    }
}

export const tokenRefresh = async () => {
    try {
        const response = await api.post('/token/refresh', {}, {

        })

        const { accessToken: newAccessToken, user } = response.data
        const userId = user._id

        return { newAccessToken, userId }
    } catch (err) {
        console.log('Error during token refresh!', err)
        throw err
    }
}