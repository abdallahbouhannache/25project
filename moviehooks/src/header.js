import React, { useState } from 'react';
import './css/header.css';

function Header(params) {
    const [headTitle, setHtitle] = useState('Best Movies')
    return (
        <div className="wrphead">

            <div className="dropdown">
                <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Movies Categories
                </button>
                <div id="dropdownmenu" className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">drama</a>
                    <a className="dropdown-item" href="#">comedy</a>
                </div>
            </div>

            <nav className="nav justify-content-center">
                <h1>
                    {headTitle}
                </h1>
            </nav>
            <div className="authlinks">
                <a className="link reg" href="#">Register</a>
                <a className="link login" href="#">Login</a>
            </div>
        </div>
    );
}




export default Header;