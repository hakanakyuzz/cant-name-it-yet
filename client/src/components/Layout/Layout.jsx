import './Layout.css'
import {Outlet} from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import LeftSide from "../LeftSide/LeftSide.jsx";
import RightSide from "../RightSide/RightSide.jsx";

const Layout = () => {
    return (
        <div>
            <Header />
            <div>
                <LeftSide />
            </div>
            <RightSide />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout