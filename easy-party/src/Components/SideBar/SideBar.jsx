import logo from "../../Images/icon.png"
import "./SideBar.css"

/* eslint-disable */
export default function Sidebar(){
    return(
        <div className="sidebar close">

            <a href="" className="logo">
                <img src={logo} alt="" />
                <div className="logo-name"><span>Easy</span>Party</div>
            </a>

            <ul className="side-menu">
                <li className="active"><a href=""><i class='bx bxs-dashboard'></i>Home</a></li>
                <li><a href=""><i class='bx bx-cog' ></i> Opção 1</a></li>
                <li><a href=""><i class='bx bx-cog' ></i> Opção 2</a></li>
                <li><a href=""><i class='bx bx-cog' ></i> Opção 3</a></li>
                <li><a href=""><i class='bx bx-cog' ></i> Opção 4</a></li>
            </ul>

            <ul class="side-menu logout">
            <li>
                <a href="#" class="logout">
                    <i class='bx bx-log-out-circle'></i>
                    Logout
                </a>
            </li>
        </ul>
        </div>
    )
}