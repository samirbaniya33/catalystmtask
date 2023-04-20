import React from 'react'

const Navbar = (props) => {
    return (
        <div className="navbar">

            <div className="navbarleft">
                <h2>RightFit.com</h2>
            </div>
            <div className="navbarright">

            
            <p>All Products</p>
            <p>Featured Products</p>
            
            <div className="cartsect">
                <ion-icon name="cart-outline" style={{fontSize:"1.5rem", margin:"0.2rem"}}></ion-icon>
                <p>{props.count}</p>
            </div>
            </div>
            
        </div>
    )
}

export default Navbar