import React from 'react'

function Footer() {
    return (
        <footer className="bg-dark py-2">
            <div className="d-flex align-items-center justify-content-center gap-4 pt-4">
                <a href="/"><i className="fa-brands fa-facebook-f icones"></i></a>
                <a href="/"><i className="fa-brands fa-twitter icones"></i></a>
                <a href="/"><i className="fa-brands fa-youtube icones"></i></a>
            </div>
            <div>
                <p className="text-light text-center fs-4 pt-3">&copy; Copyright, toutes reproductions interdites.PMYweb
                    production 2024.</p>
            </div>
        </footer>
    )
}

export default Footer
