import React from 'react'
import './App.css';
import "./App";

const productcard = (props) => {
    
    // const {id,image,name,category,price,description} = props.item;
    // console.log("props.item--->",props.item.id);
    const item= props.item;
    const image = item.image;
    return (
        <>
        <div className="productcard"> 
            <div className="prodimg" onClick={props.increment}><img src={image} alt="saree"/></div>
            {/* <div className="overlay">
                <p>Add to Cart</p>
            </div> */}
            <div className="prodtitle">{item.name}</div>
            <div className="proddesc">
                <p>{item.color}</p>
                <p>{item.material}</p>
            </div>
            <div className="prodprice">INR {item.price}</div>
        </div>
        </>
    )
}

export default productcard