import React, { useState } from 'react';

const Cart = (props) => {
    const {length}= props.plyer;
    const cost = props.plyer.reduce((x,y)=>x+y.salary,0)
    return (
        <div className="cart">
            <p>Total Selected Player :- {length}</p>
            <p>Total Cost :- ${cost}</p>
            <p>All selected player Name :-</p>
            <ul> 
            {
                props.plyer.map((x,y)=><li key={y}>{x.name}</li>)
            }
            </ul>
        </div>
    );
};

export default Cart;