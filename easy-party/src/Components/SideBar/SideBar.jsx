import logo from "../../Images/icon.png"
import "./SideBar.css"

/* eslint-disable */
export default function Sidebar() {
    return (
        <div className="sidenav">

            <a href="" className="logo">
                <img src={logo} alt="" />
                <div className="logo-name"><span>Easy</span>Party</div>
            </a>
            
            <ul>
                <li>
                    <a href=""> <i class='bx bxs-dashboard'></i> Home</a>
                </li>

                <li>
                    <a href=""> <i class='bx bxs-cog' ></i> Opção 1</a>
                </li>

                <li>
                    <a href=""> <i class='bx bxs-cog' ></i> Opção 2</a>
                </li>

                <li>
                    <a href=""> <i class='bx bxs-cog' ></i> Opção 3</a>
                </li>
            </ul>
        </div>
    )
}