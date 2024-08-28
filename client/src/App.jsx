import './App.css'
import Website from "./pages/Website.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route element={<Layout />}>
                  <Route path="/" element={<Website />} />
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App