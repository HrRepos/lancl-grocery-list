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
        this.addGroceryItem = this.addGroceryItem.bind(this);
    }

    // Load ajax's server data, as part of the lifecycle
    // [Todo] take getGroceries() out of this function
    componentDidMount() {
      // var success = function(data) {
      //   this.setState({
      //     groceryList: data
      //   });
      //   console.log('success with getting data')
      // };
      $.ajax({  // Use inner cb functions, for async Ajax
        url: 'http://localhost:3000/groceries',
        method: 'GET',  // Type does the same thing
        // Alternative way to bind: use appInstance = this at the start of componentDidMount()
        // success: success.bind(this),
        success: function(data) {
          this.setState({
            groceryList: data
          });
          console.log('success with getting data')
        }.bind(this),  // Hard-to-read way to using 'bind'

        error: function(err) {
          console.log('err', err)
        }
      });
    }

    // [Todo] finish this function, to post to the server
    addGroceryItem(item) {
      $.ajax({
        url: 'http://localhost:3000/groceries',
        method: POST,
        contentType: 'application/JSON',
        data: JSON.stringify(item),
        success: () => {
          console.log('added item');
          this.getGroceries();
        },
        error: () => {

        }
      })
    }

    render() {
        return (
            <div>
                {/* <h5>Grocery List</h5> */}
                <GroceryList
                groceryList={this.state.groceryList}
                />
            </div>
        );
    }
}

export default App;