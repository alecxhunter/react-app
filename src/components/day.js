import React from 'react';
import DayDetails from './day-details';
import classNames from 'classnames';

class Day extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false  
        };
        this._openDetails = this._openDetails.bind(this);
        this._closeDetails = this._closeDetails.bind(this);
    }
    
    _openDetails() {
        if (this.props.invalid || this.state.opened)
            return;
        this.setState({
            opened: true
        });
    }
    
    _closeDetails() {
        if (this.props.invalid || !this.state.opened)
            return;
        this.setState({
            opened: false
        });
    }
    
    _getContent() {
        if (!this.state.opened) {
            return this.props.date.getDate();
        } else {
            return <DayDetails date={this.props.date} closeDetails={this._closeDetails}/>;
        }
    }
    
    render() {
        var classes = classNames({
            'calendar-day': true,
            'invalid': this.props.invalid,
            'opened': this.state.opened
        });
        
        return (
            <td className={classes} onClick={this._openDetails}>
                {this._getContent()}
            </td>
        );
    }
}

module.exports = Day;