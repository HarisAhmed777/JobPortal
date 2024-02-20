import React from 'react';
import './header.css';
import img from '../images/logo.png';

function Header(){
    return(
        <>
            <div className='maindiv  text-center align-center  bg-dark text-white mt-3 pb-2'>
                <div className='d-flex justify-content-center'>
                    <div>
                    <img src={img}/>
                    </div>
                    <div className='headingdiv mt-2'>
                    <h4>Jobie</h4>
                    <p>Best wesite for job seekers</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;