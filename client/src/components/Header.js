import React from 'react'
import { Link } from "react-router-dom"



export default function Header() {
    return (
        <div className='headerCont'>
            <div className="header">
                <h1>Trey Love</h1>
            </div>

            <ul className="navLinks">
                <li>
                    <Link to="/"> Home</Link>
                </li>

                <li>
                    <Link to="/about">About </Link>
                </li>
                {/* <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/projects">Projects </Link>
                </li> */}

            </ul>

        </div>
    )
}
