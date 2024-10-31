import './Layout.css'
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import LeftSide from "../LeftSide/LeftSide.jsx";
import RightSide from "../RightSide/RightSide.jsx";
import { useAuth } from "../../hooks/AuthContext.jsx";

const Layout = () => {
    const location = useLocation()
    const currentPath = location.pathname

    const hideFooter = ['/messages', '/messages/userId']
    const hideRightSide = ['/']

    const showFooter = !hideFooter.includes(currentPath)
    const showRightSide =  hideRightSide.includes(currentPath)

    const { isAuthenticated, navigate } = useAuth()

    if (isAuthenticated)
    return (
        <div className="layout-container">
            <LeftSide/>
            <div className="main-content">
                <Outlet/>
                {showFooter && <Footer/>}
            </div>
            {showRightSide && <RightSide/>}
        </div>
    )
    else {
        navigate('/login')
    }
}

export default Layout