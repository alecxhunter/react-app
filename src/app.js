import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/calendar'

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Calendar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));