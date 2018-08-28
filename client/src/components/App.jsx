// React's App class
// With Ajax requsts, to get/send data from/to the server

import React from 'react';
import GroceryList from './GroceryList.jsx';
import AddGrocery from './AddGrocery.jsx';
import $ from 'jquery';


// const list = [
//   {name: 'pie', quantity: 10}
// ];

// const App = () => (
//   <div>
//     <GroceryList
//       groceryList = {list}
//     />
//   </div>
// );

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            groceryList: []
            //grocery: groceries[0]
        }
        this.addGroceryItem = this.addGroceryItem.bind(this);  // 'bind' can also happen here
    }

    // Load ajax's server data, as part of the Reat lifecycle
    // Functions below are hoisted here
    componentDidMount() {
      this.getGroceries();
    }

    getGroceries(){
      //Alternative way to bind: use appInstance = this at the start of componentDidMount()
      var success = function(data) {
        this.setState({
          groceryList: data
        });
        console.log('success with getting data')
      };
      $.ajax({  // Use inner cb functions, for async Ajax
        url: 'http://localhost:3000/groceries',
        method: 'GET',  // Type does the same thing
        success: success.bind(this),  // Note: do not use 'success(data)' here

        error: function(err) {
          console.log('err', err)
        }
      });
    }

    // Post/add data to the server
    // Per jQuery's syntax
    addGroceryItem(item) {
      $.ajax({
        url: 'http://localhost:3000/groceries',
        method: 'POST',
        contentType: 'application/JSON',
        data: JSON.stringify(item),
        success: () => {
          console.log('added item');
          this.getGroceries();  // If success, then invoke getGroceries() from above
        },
        error: () => {
          console.log('err', err)
        }
      })
    }

    // Note: React only returns 1 element (so no 2 <div></div>s)
    render() {
        return (
            // <div>
            //   <AddGrocery
            //     groceryList={this.state.groceryList}
            //   />
            // </div>
            <div>
                <h5>Add Grocery</h5>
                <AddGrocery
                  addGrocery={this.addGroceryItem}
                />
                <h5>Grocery List</h5>
                <GroceryList
                  groceryList={this.state.groceryList}
                />
            </div>
        );
    }
}

export default App;