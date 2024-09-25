import React, { useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DateContext } from '../context/DateContext';

const DatePickerComponent = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useContext(DateContext);

  const renderDayContents = (day, date) => {
    return <span className="text-gray-700"> {day}</span>;
  };

  return (
    <div className="p-4">
      <div>
        <label>Start Date:</label>
        <DatePicker 
        selected={startDate} 
        onChange={(date) => setStartDate(date)}
        renderDayContents={(day, date) => renderDayContents(day, date)}
        />
      </div>
      <div>
        <label>End Date (Optional):</label>
        <DatePicker 
        selected={endDate} 
        onChange={(date) => setEndDate(date)}
        renderDayContents={(day, date) => renderDayContents(day, date)}
        isClearable />
      </div>
    </div>
  );
};

export default DatePickerComponent;
