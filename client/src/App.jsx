import './App.css'
import Website from "./pages/Website.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Messages from "./pages/Messages/Messages.jsx";
import Message from "./pages/Message/Message.jsx";
import Notifications from "./pages/Notifications/Notifications.jsx";
import Search from "./pages/Search/Search.jsx";
import EditProfile from "./pages/EditProfile/EditProfile.jsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route element={<Layout />}>
                  <Route path="/" element={<Website />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path='/messages' element={<Messages />}>
                      <Route path=':userId' element={<Message />} />
                  </Route>
                  <Route path='/notifications' element={<Notifications />} />
                  <Route path='/search' element={<Search />} />
                  <Route path='/edit-profile' element={<EditProfile />}></Route>
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App