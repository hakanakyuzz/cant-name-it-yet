import './Layout.css'
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import LeftSide from "../LeftSide/LeftSide.jsx";
import RightSide from "../RightSide/RightSide.jsx";

const Layout = () => {
    return (
        <div className="layout-container">
            <LeftSide/>
            <div className="main-content">
                <Outlet/>
                <Footer/>
            </div>
            <RightSide/>
        </div>
    )
}

export default Layout