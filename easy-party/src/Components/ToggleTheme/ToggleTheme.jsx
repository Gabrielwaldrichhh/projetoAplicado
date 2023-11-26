import React from "react";
import { useState, useEffect } from "react";
import './ToggleTheme.css'

export default function ToggleTheme() {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const body = document.querySelector('body');
        body.classList.toggle('dark', isChecked);
    }, [isChecked]);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div className="toggle-theme">
            <div>
                <input
                    type="checkbox"
                    id="theme-toggle"
                    hidden
                    onChange={handleToggle}
                    checked={isChecked}
                ></input>

                <label for="theme-toggle" class="theme-toggle"></label>
            </div>

            <div className="sun-moon">
                <i class='bx bx-sun'></i>
                <i class='bx bx-moon' ></i>
            </div>
        </div>
    )
}