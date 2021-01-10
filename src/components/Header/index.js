import React from 'react';
import './style.css';
import { Jumbotron } from 'react-bootstrap';
import Nav from '../Nav';

function Header(props) {
    return (
        <Jumbotron className='d-flex justify-content-around justify-content-md-between flex-wrap jumbo'>
            <div className='username d-flex'>
                <h1 className='header text-light m-1'>Jordan Carver | webCarver Productions</h1>
            </div>
            <Nav currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} />
        </Jumbotron>
    )
};

export default Header;