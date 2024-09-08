import './Layout.css'
import {Outlet, useLocation} from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import LeftSide from "../LeftSide/LeftSide.jsx";
import RightSide from "../RightSide/RightSide.jsx";

const Layout = () => {
    const location = useLocation()
    const currentPath = location.pathname

    const hideFooter = ['/messages', '/messages/userId']
    const hideRightSide = ['/messages', '/profile', '/messages/userId', '/notifications']
    const showFooter = !hideRightSide.includes(currentPath)
    const showRightSide =  !hideFooter.includes(currentPath)

    return (
        <div className="layout-container">
            <LeftSide/>
            <div className="main-content">
                <Outlet/>
                {showRightSide && <Footer/>}
            </div>
            {showFooter && <RightSide/>}
        </div>
    )
}

export default Layout