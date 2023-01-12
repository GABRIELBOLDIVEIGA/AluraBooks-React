import React from "react";
import logo from "../img/logo.svg";
import './estilo.css'

export default function Logo() {
    return (
        <div className="logo">
            <img 
                src={logo} 
                className='logo-img' 
                alt="logo">
            </img>
            <p> <strong> Alura </strong> Books</p>
        </div>
    );
}
