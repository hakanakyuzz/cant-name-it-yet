import './App.css'
import Website from "./pages/Website.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Messages from "./pages/Messages/Messages.jsx";
import Message from "./pages/Message/Message.jsx";
import Notifications from "./pages/Notifications/Notifications.jsx";
import Search from "./pages/Search/Search.jsx";
import EditProfile from "./pages/EditProfile/EditProfile.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import { Suspense } from "react";
import { AuthInitializer } from "./hooks/AuthContext.jsx";

function App() {
    return (
        <BrowserRouter>
            <Suspense>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route element={<AuthInitializer><Layout /></AuthInitializer>}>
                        <Route path="/" element={<Website />} />
                        <Route path="/:userId" element={<Profile />} />
                        <Route path='/messages' element={<Messages />}>
                            <Route path=':userId' element={<Message />} />
                        </Route>
                        <Route path='/notifications' element={<Notifications />} />
                        <Route path='/search' element={<Search />} />
                        <Route path='/edit-profile' element={<EditProfile />}></Route>
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default App