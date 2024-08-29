import './App.css'
import Website from "./pages/Website.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Messages from "./pages/Messages/Messages.jsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route element={<Layout />}>
                  <Route path="/" element={<Website />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path='/messages' element={<Messages />} />
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App