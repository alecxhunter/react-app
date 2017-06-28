import React from 'react';
import Day from './day';
import DayDetail from './day-details';

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {
            currentDate: new Date()
        };
        this._prevMonth = this._prevMonth.bind(this);
        this._nextMonth = this._nextMonth.bind(this);
    }
    
    _prevMonth() {
        var newMonth = (this.state.currentDate.getMonth() - 1 + 12) % 12;
        
        var newDate = new Date(this.state.currentDate);
        newDate.setMonth(newMonth);
        if (newMonth > this.state.currentDate.getMonth()) {
            newDate.setFullYear(this.state.currentDate.getFullYear() - 1);
        }
        
        this.setState({
            currentDate: newDate
        });
    }
    
    _nextMonth() {
        var newMonth = (this.state.currentDate.getMonth() + 1 + 12) % 12;
        
        var newDate = new Date(this.state.currentDate);
        newDate.setMonth(newMonth);
        if (newMonth < this.state.currentDate.getMonth()) {
            newDate.setFullYear(this.state.currentDate.getFullYear() + 1);
        }
        
        this.setState({
            currentDate: newDate
        });
    }
    
    render() {
        var firstDayOfMonth = new Date(this.state.currentDate.getFullYear(), this.state.currentDate.getMonth(), 1);
        var firstDayOfWeek = new Date(firstDayOfMonth);
        firstDayOfWeek.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay());
        
        var dates = [];
        for (var i = 0; i < 6; i++) {
            var week = [];
            for (var j = 0; j < 7; j++) {
                var tmp = new Date(firstDayOfWeek);
                tmp.setDate(firstDayOfWeek.getDate() + j + (i * 7));
                week.push(tmp);
            }
            dates.push(week);
        }
        
        var self = this;
        
        return (
            <div className="calendar-container">
                <table className="calendar">
                    <thead>
                        <tr>
                            <th><span className="calendar-control" onClick={this._prevMonth}>&lt;</span></th>
                            <th colSpan="5">{monthNames[this.state.currentDate.getMonth()] + ' ' + this.state.currentDate.getFullYear()}</th>
                            <th><span className="calendar-control" onClick={this._nextMonth}>&gt;</span></th>
                        </tr>
                        <tr>
                            <th>Su</th>
                            <th>Mo</th>
                            <th>Tu</th>
                            <th>We</th>
                            <th>Th</th>
                            <th>Fr</th>
                            <th>Sa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dates.map(function(week, i) {
                                return (
                                    <tr key={i}>
                                        {
                                            week.map(function(day, j) {
                                                return (
                                                    <Day date={day} key={j} invalid={self.state.currentDate.getMonth() != day.getMonth()} /> 
                                                );
                                            })
                                        }
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
};

module.exports = Calendar;