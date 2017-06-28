import React from 'react';

class DayDetail extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    
    render() {
        return (
            <div className="day-details">
                <h5>{this.props.date.toDateString()}</h5>
                <button type="button" className="close" aria-label="Close" onClick={this.props.closeDetails}>&times;</button>
                <hr />
                <h5>Events</h5>
                <ul className="list-unstyled day-events">
                    <li className="text-left">
                        <button className="btn btn-sm" type="button" area-label="Add new event">&#43;</button>
                    </li>    
                </ul>
            </div>
        );
    }
}

module.exports = DayDetail;