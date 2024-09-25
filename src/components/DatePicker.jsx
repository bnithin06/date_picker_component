import React, { useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DateContext } from '../context/DateContext';

const DatePickerComponent = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useContext(DateContext);

  return (
    <div className="p-4">
      <div>
        <label>Start Date:</label>
        <DatePicker selected={startDate} onChange={setStartDate} />
      </div>
      <div>
        <label>End Date (Optional):</label>
        <DatePicker selected={endDate} onChange={setEndDate} isClearable />
      </div>
    </div>
  );
};

export default DatePickerComponent;
