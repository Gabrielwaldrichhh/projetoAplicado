import React from "react"
import logo from "../../Images/icon.png"
import { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css"
import user from "../../Images/user.jfif"

/* eslint-disable */
export default function Sidebar() {
    const [isSidebarClosed, setSidebarClosed] = useState(true);
    const [activeLink, setActiveLink] = useState("Mapa");

    const toggleSidebar = () => {
        setSidebarClosed(!isSidebarClosed);
    };

    const sidebarClass = `sidenav ${isSidebarClosed ? 'close' : ''}`;
    const links = [
        { name: 'Mapa', icon: 'bx bx-map' },
        { name: 'Suas Partys', icon: 'bx bx-party' },
        { name: 'Favoritos', icon: 'bx bx-heart' },
        { name: 'Configurações', icon: 'bx bx-cog' },
    ];
    return (
        <div className={sidebarClass}>

            <div className="sidebar-top">
                <a href="" className="logo">
                    <img src={logo} alt="" />
                    <div className="logo-name"><span>Easy</span>Party</div>
                </a>
                <i class='bx bx-menu' onClick={toggleSidebar}></i>
            </div>

            <div className="sidebar-mid">
                <ul>
                    {links.map(link => (
                        <li key={link.name} className={activeLink === link.name ? 'action' : ''} onClick={() => setActiveLink(link.name)}>
                            <i className={link.icon}></i>
                            <span>{link.name}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="sidebar-bottom">
                <div className="user">
                    <img src={user} alt="" />
                    <span>
                        <a href="">Gabriel Waldrich</a>
                    </span>
                </div>
                <Link to="/"><i class='bx bx-log-out' ></i></Link>
            </div>
        </div>
    )
}