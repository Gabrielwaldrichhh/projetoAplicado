/* eslint-disable */
import React from "react"
import "./SearchBar.css"
export default function SearchBar() {

    return (
        <div className="search-bar">
            <input type="text" placeholder="Digite o endereço" className="search"/>
            <i class='bx bx-search-alt-2'></i>
        </div>
    )
}