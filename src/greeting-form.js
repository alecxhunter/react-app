import React from 'react';

var GreetingForm = React.createClass({
    handleNameChange: function(e) {
        this.props.onChange(e.target.value);  
    },
    render: function() {
        return (
            <div>
                <input type="text" name="name" value={this.props.name} onChange={this.handleNameChange}/>
            </div>
        );
    }
});

module.exports = GreetingForm;