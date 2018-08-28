import React from 'react';

const Grocery = (props) => (
    <div>
        <span> { props.item.name } </span>
        <span> { props.item.quantity } </span>
    </div>
);

export default Grocery;