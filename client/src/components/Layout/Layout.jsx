import './Layout.css'
import {Outlet, useLocation} from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import LeftSide from "../LeftSide/LeftSide.jsx";
import RightSide from "../RightSide/RightSide.jsx";

const Layout = () => {
    const location = useLocation()
    const currentPath = location.pathname

    const hideFooterAndRightSide = ['/messages', '/profile', '/messages/userId']
    const showFooterAndRightSide = !hideFooterAndRightSide.includes(currentPath)

    return (
        <div className="layout-container">
            <LeftSide/>
            <div className="main-content">
                <Outlet/>
                {showFooterAndRightSide && <Footer/>}
            </div>
            {showFooterAndRightSide && <RightSide/>}
        </div>
    )
}

export default Layout