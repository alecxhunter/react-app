import React from 'react';
import ReactDOM from 'react-dom';
//import App from './app.jsx';

var App = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Hello world!</h1>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));