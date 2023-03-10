import React from 'react'
import './Header.css';
const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                <i className="fas fa-bars"></i>
                    <div className="collapse navbar-collapse" id="navbarExample01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <p className="nav-link" aria-current="page" href="#">Home</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link" href="#">Features</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link" href="#">Pricing</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link" href="#">About</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        <div className="p-5 text-center bg-image">
            <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                        <h1 className="mb-3">{props.title}</h1>
                        <h1 className="mb-3">{props.subtitle}</h1>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
)}
export default Header