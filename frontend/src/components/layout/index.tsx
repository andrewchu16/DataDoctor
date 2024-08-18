import { Outlet } from "react-router-dom";
import "./style.css";
import Nav from "../nav";

const Layout = () => {
    return (
        <>
            <main className="main">
                <div className="outlet-layout">
                    <Outlet />
                </div>
                <div className="navbar-layout">
                    <Nav />
                </div>
            </main>
        </>
    );
};

export default Layout;
