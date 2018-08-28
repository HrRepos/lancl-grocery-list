import React from 'react';

class AddGrocery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            quantity: 0
        };
    }

    handleChangeText(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleChangeQuantity(event) {
        this.setState({
            quantity: event.target.value
        });
    }

    handleChangeSubmit(event) {
        // Stop page refresh, when clicking on submit
        event.preventDefault();
        this.props.addGrocery({
            name: this.state.name,
            quantity: this.state.quantity
        })
    }

    render() {
        return (
            // Refer to React's documentation on form
            <form onSubmit={this.handleChangeSubmit}>
                <input type = 'text' onChange={this.handleChangeText.bind(this)}/>
                <input type = 'number' onChange={this.handleChangeQuantity.bind(this)}/>
                {/* <input type = 'submit' onSubmit={this.handleChangeSubmit.bind(this)}/> */}
                <input type = 'submit'/>

            </form>
        );
    }
}

export default AddGrocery;