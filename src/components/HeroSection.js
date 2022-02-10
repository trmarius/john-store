import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './HeroSection.css';

const scrollToTop = () => {window.scrollTo(0,0)};

function HeroSections() {
    return (
        <>
            <div class="header">
                <div class="container">
                    <div className="row">
                        <div className="col-2">
                                <h1>Welcome to <br/>Our Online Shop!</h1>
                                <p> Positive thinking is the key to success!
                                </p>
                                <Link className="btn" to='/products' onClick={scrollToTop}>Shop Now! &#8594;</Link>
                                {/* <a href="" class="btn">Buy Now &#8594;</a> */}
                        </div>
                        <div className="col-2">
                                <img src="images/shop.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default HeroSections;
