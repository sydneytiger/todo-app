import React from 'react'
import PropTypes from 'prop-types';

class Header extends React.PureComponent{
  static propTypes = {
    taskCount: PropTypes.number,
    displayDate: PropTypes.object
  }

  static defaultProps = {
    taskCount: 0,
    displayDate: new Date()
  }

  getDayOfWeek = () => {
    const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return dayOfWeek[this.props.displayDate.getDay()];
  }

  getMonthOfYear = () => {
    const monthOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthOfYear[this.props.displayDate.getMonth()];
  }

  getDateOfMonth = () => {
    const date = this.props.displayDate.getDate();
    switch(date) {
      case 1:
      case 21:
      case 31:
        return date + 'st';
      case 2:
      case 22:
        return date + 'nd';
      case 3:
      case 23:
        return date + 'rd';
      default:
        return date + 'th';
    }
  }

  taskCountText = () => {
    return this.props.taskCount > 1 ? `${this.props.taskCount} tasks` : `${this.props.taskCount} task`
  }

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-5 ml-1">
              <h2>
                <span className="font-weight-bold mr-2 test-day">{this.getDayOfWeek()},</span> 
                <span className="test-date">{this.getDateOfMonth()}</span>
              </h2> 
              <h5 className="test-month">{this.getMonthOfYear()}</h5>
            </div>
            <div className="col-1"></div>
            <div className="col-4">
              <h5 className="float-right mt-5 mb-3 mr-4 test-taskCount">{this.taskCountText()}</h5>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
