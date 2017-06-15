import React from 'react';

var Greeting = React.createClass({
    render: function() {
        return <h3>Hello there, {this.props.name}</h3>;     
    }
});

module.exports = Greeting;