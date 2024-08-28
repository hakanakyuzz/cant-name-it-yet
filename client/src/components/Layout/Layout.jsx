import './Layout.css'
import {Outlet} from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Side from "../Side/Side.jsx";

const Layout = () => {
    return (
        <div>
            <Header />
            <Side />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout