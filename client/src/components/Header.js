import React from 'react'

export default function Header({taskCount}) {
  const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const monthOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const getDayOfWeek = () => {
    const today = new Date();
    return dayOfWeek[today.getDay()];
  }

  const getMonthOfYear = () => {
    const today = new Date();
    return monthOfYear[today.getMonth()];
  }

  const getDateOfMonth = () => {
    const date = new Date().getDate();
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

  const taskCountText = () => {
    return taskCount > 1 ? `${taskCount} tasks` : `${taskCount} task`
  }

  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2>
              <span className="font-weight-bold">{getDayOfWeek()},</span> 
              {getDateOfMonth()}
            </h2>
            <h6>{getMonthOfYear()}</h6>
          </div>
          <div className="col-3"></div>
          <div className="col-5">
            <h6 className="float-right mt-5 mb-3">{taskCountText()}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}
