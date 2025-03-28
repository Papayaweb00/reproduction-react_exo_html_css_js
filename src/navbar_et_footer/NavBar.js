import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function NavBar({n}) {
    return (
        <header className="bg-dark px-3 d-flex fixed-top align-items-center justify-content-around">
            <div className="text-light d-flex align-items-center" id="l">
                <Link to="/panier" className="text-light fw-bold fs-5">
                    <i className="fa-solid fa-cart-shopping" />
                </Link>
                <p className="count">{n}</p>
            </div>
            <div>
                <h1 className="fw-bold fs-4 navbar-brand text-danger px-5 ms-1">&#10070;Shop</h1>
            </div>

            <nav className="navbar navbar-expand-lg gap-5">
                <div
                    className="offcanvas offcanvas-start bg-dark d-block d-lg-none w-100"
                    tabIndex="-1"
                    id="canvas"
                    aria-labelledby="offcanvasLabel"
                >
                    <div className="offcanvas-header">
                        <h1 className="offcanvas-title fw-bold fs-1 navbar-brand text-danger" id="offcanvasLabel">
                            &#10070;Shop
                        </h1>
                        <button
                            type="button"
                            className="btn-close text-reset bg-light"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        />
                    </div>
                    <div className="offcanvas-body">
                        <div className="d-flex align-items-center gap-3 su mb-5">
                            <input
                                type="search"
                                placeholder="Mot clé"
                                id="search"
                                className="input-group"
                            />
                            <input
                                type="submit"
                                value="Search"
                                id="su"
                                className="input-group bg-light border-0 w-25 text-uppercase"
                            />
                        </div>
                        <ul className="nav d-flex flex-column align-items-center gap-4 fs-4">
                            <li className="nav-item"><Link to="/" className="nav-link text-light font active">Acceuil</Link></li>
                            <li><Link to="/vetement" className="nav-link text-light">Vêtements</Link></li>
                            <li><Link to="/fruit" className="nav-link text-light">Fruits</Link></li>
                            <li><Link to="/legume" className="nav-link text-light">Légumes</Link></li>
                            <li><Link to="/jouet" className="nav-link text-light fs-5">Jouets pour les enfants</Link></li>
                            <li className="nav-item"><Link to="/contact" className="nav-link text-light font">Nous contacter</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="gap-5 d-lg-flex align-items-center justify-content-center d-none d-lg-block">
                    <ul className="nav d-flex flex-lg-row flex-column align-items-center">
                        <li className="nav-item"><Link to="/" className="nav-link text-light font active">Acceuil</Link></li>
                        <div className="dropdown d-none d-lg-block">
                            <button
                                className="btn btn-light dropdown-toggle font"
                                id="Menu"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Nos produits
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="Menu">
                                <li><Link to="/vetement" className="dropdown-item">Vêtements</Link></li>
                                <li><Link to="/fruit" className="dropdown-item">Fruits</Link></li>
                                <li><Link to="/legume" className="dropdown-item">Légumes</Link></li>
                                <li><Link to="/jouet" className="dropdown-item">Jouets pour les enfants</Link></li>
                            </ul>
                        </div>
                        <li className="nav-item"><Link to="/contact" className="nav-link text-light font">Nous contacter</Link></li>
                    </ul>
                    <div className="d-flex align-items-center gap-3 su">
                        <label htmlFor="search" className="op">
                            <i className="fa-solid fa-magnifying-glass" />
                        </label>
                        <input type="search" placeholder="Mot clé" id="search" className="input-group" />
                        <input type="submit" value="Search" id="su" className="input-group bg-light border-0 w-25 text-uppercase" />
                    </div>
                </div>
                <button
                    className="btn btn-primary d-block d-lg-none"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#canvas"
                    aria-controls="canvas"
                >
                    <i className="fa-solid fa-bars fw-bold fs-1 w-100 h-100" />
                </button>
            </nav>
        </header>
    );
}

export default NavBar;
