import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = ({children}) => {

    return (
        <div className="position-relative">
            <nav className="navbar navbar-expand-lg navbar-dark bg-blue-light fixed-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">The Movies</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* jika kita ingin mengganti clas name saat aktif maka (activeClassName='text-danger') di setiap navlink */}
                                <NavLink exact className="nav-link" to="/">Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="py-5 mt-10">
                {children}
            </div>
        </div>
    );
}

export default Navbar;
