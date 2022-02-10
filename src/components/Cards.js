import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Cards.css";

const scrollToTop = () => {window.scrollTo(0,0)};

function Cards() {
    return (
        
            <div class="categories">
            <h2 class="title">Featured categories</h2>
            <div class="small-container">
                <div class="row">
                    <div class="col-3">
                        <h4>Beauty</h4>
                        <Link className="a" to='/products' onClick={scrollToTop}><img src="images/beauty.png" alt=""/></Link>
                        {/* <a href="/products"><img src="images/beauty.png" alt=""/></a> */}
                    </div>
                    <div class="col-3">
                    <h4>Kids</h4>
                    <Link className="a" to='/products' onClick={scrollToTop}><img src="images/kids.png" alt=""/></Link>
                        {/* <a href="/products"><img src="images/kids.png" alt=""/></a> */}
                    </div>
                    <div class="col-3">
                        <h4>Auto</h4>
                        <Link className="a" to='/products' onClick={scrollToTop}><img src="images/auto.png" alt=""/></Link>
                        {/* <a href="/products"><img src="images/auto.png" alt=""/></a> */}
                    </div>
                </div>
            </div>
            </div>
        
    );
}

export default Cards;
