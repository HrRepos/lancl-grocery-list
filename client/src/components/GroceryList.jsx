import React from 'react';
import Grocery from './Grocery.jsx';

// props: {groceryList}
const GroceryList = (props) => (
    <div>
        {
            props.groceryList.map(grocery => <Grocery item={grocery}/>)
        }
    </div>
);

export default GroceryList;