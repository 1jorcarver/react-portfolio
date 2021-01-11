import React from 'react';
import './style.css';

function Navigation(props) {
    const pages = [
        {
            name: 'About'
        },
        {
            name: 'Projects'
        },
        {
            name: 'Contact'
        },
        {
            name: 'Resume'
        }
    ];
    
    function isActive(name) {
        if (props.currentPage === name)
        return true;
        else return false;
    }

    return (
        <nav className="navbar navbar-expand d-flex">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {pages.map(page => {
                        return (
                            <li className={`nav-item `} key={page.name}>
                                <span className={`nav-link ${isActive(page.name) ? 'navActive' : 'text-light'}`}
                                    onClick={() => {
                                        props.setCurrentPage(page.name);
                                    }}
                                >{page.name}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;