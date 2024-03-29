import { useState } from 'react';
import React from 'react'
import Calendar from './Calender';
import OrderDetails from './OrderDetails';
import "./Calender.css"

const OrderCalenderview = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateClick = (date) => {
      setSelectedDate(date);
    };
  return (
    <div className='cal-body'>
      <h4 style={{textAlign:'center'}}>Orders are arrange by Date</h4>
      <Calendar onDateClick={handleDateClick} />
      {selectedDate && <OrderDetails date={selectedDate} />}
      
      </div>
  )
}

export default OrderCalenderview