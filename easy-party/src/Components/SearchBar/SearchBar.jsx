/* eslint-disable */
import React from "react"
import "./SearchBar.css"
export default function SearchBar() {

    return (
        <div className="search-bar">
            <input type="search" placeholder="Buscar..." className="search"/>
            <button className="search-btn" type="submit"><i class='bx bx-search-alt-2'></i></button>
        </div>
    )
}