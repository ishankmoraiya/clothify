import React from 'react';
import "./Calender.css"
const Calendar = ({ onDateClick }) => {
  //Generate randowm dates for the calender view 

  //if needed then realtime calendrr is also implemented for nor data are less thats why i choose a mock calener view 
  const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
  const daysArray = [...Array(daysInMonth).keys()].map((day) => day + 1);

  // Function to handle click on a date
  const handleClick = (day) => {
    onDateClick(day);
  };

  return (
    <div >

    <div className="calendar">
      
      {daysArray.map((day) => (
        <div key={day} className="calendar-day" onClick={() => handleClick(day)}>
          {day}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Calendar;
