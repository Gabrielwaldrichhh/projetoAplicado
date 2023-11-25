import React from "react";
import './ToggleTheme.css'

export default function ToggleTheme() {
    return (
        <div className="toggle-theme">
            <div>
                <input type="checkbox" id="theme-toggle" hidden></input>
                <label for="theme-toggle" class="theme-toggle"></label>
            </div>
            
            <div className="sun-moon">
                <i class='bx bx-sun'></i>
                <i class='bx bx-moon' ></i>
            </div>
        </div>
    )
}