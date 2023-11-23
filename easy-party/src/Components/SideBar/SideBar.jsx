import logo from "../../Images/icon.png"
import { useState } from "react";
import "./SideBar.css"
import user from "../../Images/user.jfif"

/* eslint-disable */
export default function Sidebar() {
    const [isSidebarClosed, setSidebarClosed] = useState(true);

    const toggleSidebar = () => {
        setSidebarClosed(!isSidebarClosed);
    };

    const sidebarClass = `sidenav ${isSidebarClosed ? 'close' : ''}`;

    return (
        <div className={sidebarClass}>
            <div className="sidebar-top">
                <a href="" className="logo">
                    <img src={logo} alt="" />
                    <div className="logo-name"><span>Easy</span>Party</div>
                </a>
                <i class='bx bx-menu' onClick={toggleSidebar}></i>
            </div>

            <div className="sidebar-mid"></div>

            <div className="sidebar-bottom">
                <div className="user">
                    <img src={user} alt="" />
                    <span>
                        <a href="">Gabriel Waldrich</a>
                        <i class='bx bx-cog'>Configurações</i>
                        </span>
                </div>
                <i class='bx bx-log-out' ></i>
            </div>
        </div>
    )
}