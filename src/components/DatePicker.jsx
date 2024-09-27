import React, { useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DateContext } from '../context/DateContext';
import { FaCalendarAlt } from 'react-icons/fa'; // Importing calendar icon

const DatePickerComponent = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useContext(DateContext);

  const renderDayContents = (day) => {
    return <span className="text-gray-700"> {day}</span>;
  };

  return (
    <div className="p-4 mb-7 rounded-lg shadow-md bg-slate-200">
      <div className="mb-5"> 
        <label className="block text-gray-700 font-bold mb-2">Start Date:</label>
        <div className="relative">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            renderDayContents={(day, date) => renderDayContents(day, date)}
            placeholderText="Select Start Date"
            className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
            <FaCalendarAlt />
          </div>
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-gray-700 font-bold mb-2">End Date (Optional):</label>
        <div className="relative">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            renderDayContents={(day, date) => renderDayContents(day, date)}
            isClearable
            placeholderText="Select End Date"
            className="w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
            <FaCalendarAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePickerComponent;
