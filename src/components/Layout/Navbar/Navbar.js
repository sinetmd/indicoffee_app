import React from 'react'

import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./style.css"
import logo from "../../../assets/dosa.jpg"

const Navbar = () => {

    const renderNavBar = () => (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Logo..." className='logo' />
                    <label style={{ color: "black", fontsize: "14px", fontWeight: "bold" }}>ind
                        <span className="logo-label">iC</span>afe&egrave;
                    </label>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Browse</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Sign In</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Cart</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="Search ..." aria-label="Search"
                                size="40" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-success"
                                    style={{ background: 'var(--primary-green)', color: 'var(--primary-white' }}
                                    type="submit">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </nav>
    )


    return (
        <>
            {renderNavBar()}
        </>
    )
}

export default Navbar