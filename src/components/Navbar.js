import React, { Component } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'

class Navbar extends Component {

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary bg-warning">
                    <i className="myicon">
                        <img src="bee.svg" alt="" />
                    </i>
                    <div className="container-fluid">
                        <strong> <label className="navbar-brand">Cukoobee news</label></strong>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item ">
                                    <strong><a className="nav-link text-dark" aria-current="page" href="/">Home</a></strong>
                                </li>
                                <li className="nav-item ">
                                    <strong><a className="nav-link text-dark" aria-current="page" href="/report">Report</a></strong>
                                </li>
                                <li className="nav-item text-black">
                                    <strong> <a className="nav-link text-dark" href="/blog">Blog</a></strong>
                                </li>
                                <li className="nav-item dropdown">
                                    <strong><label className="nav-link dropdown-toggle text-dark" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Category
                                    </label></strong>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                        <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                                        <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                        <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                        <li><Link className="dropdown-item" to="/science">Science</Link></li>
                                        <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                    </ul>
                                </li>

                            </ul>
                            <form className="d-flex " role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-dark text-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}
/*Error resolution: for bootstrap not working properly check the index.html
in public folder and just add the link of bootstrap if not added. */
export default Navbar;
