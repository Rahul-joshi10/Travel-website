import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        SKANDHOPANEYA <i className="fab fa-typo3" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
