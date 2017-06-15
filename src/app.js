import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './greeting';
import GreetingForm from './greeting-form'

var App = React.createClass({
    getInitialState: function() {
        return { name: 'Alecx Hunter' };
    },
    changeName: function(newName) {
        this.setState({
           name: newName 
        });
    },
	render: function() {
        return (
            <div>
                <h1>Hello world!</h1>
                <GreetingForm name={this.state.name} onChange={this.changeName}/>
                <Greeting name={this.state.name}/>
            </div>
        );
	}
});

ReactDOM.render(<App />, document.getElementById('app'));