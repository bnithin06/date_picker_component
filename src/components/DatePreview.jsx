import React, { useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DateContext } from '../context/DateContext';

const DatePreview = () => {
  const { startDate, endDate, recurrence } = useContext(DateContext);

  // Function to check if a date should be highlighted
  const isDateHighlighted = (date) => {
    const day = date.getDay();
    const dateOfMonth = date.getDate();

    // Handle weekly recurrence
    if (recurrence.frequency === 'Weekly' && recurrence.daysOfWeek.length > 0) {
      return recurrence.daysOfWeek.includes(getDayName(day));
    }

    // Handle monthly recurrence
    if (recurrence.frequency === 'Monthly') {
      const nthDay = parseInt(recurrence.nthDay, 10);
      if (recurrence.nthDay === 'last') {
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        return dateOfMonth === lastDay && getDayName(day) === recurrence.nthDayWeek;
      } else {
        return dateOfMonth === nthDay && getDayName(day) === recurrence.nthDayWeek;
      }
    }

    // Check for selected specific dates
    if (recurrence.selectedDates) {
      if (recurrence.selectedDates.some(selectedDate =>
        selectedDate.getDate() === dateOfMonth &&
        selectedDate.getMonth() === date.getMonth() &&
        selectedDate.getFullYear() === date.getFullYear()
      )) {
        return true;
      }
    }

    // Highlight dates between start and end date
    if (startDate && endDate) {
      const currentDate = date.setHours(0, 0, 0, 0);
      const start = startDate.setHours(0, 0, 0, 0);
      const end = endDate.setHours(0, 0, 0, 0);
      return currentDate >= start && currentDate <= end;
    }

    return false;
  };

  // Helper function to get the day name
  const getDayName = (day) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[day];
  };

  // Function to customize day rendering in the calendar
  const renderDayContents = (day, date) => {
    return (
      <div
        className={`p-2 ${isDateHighlighted(date) ? 'bg-yellow-300 font-bold' : ''} rounded-full`}
      >
        {day}
      </div>
    );
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <h2 className="font-semibold mb-2">Visual Preview:</h2>
      <p className=' mb-4'>Select recurring dates displayed on the calendar:</p>
      <DatePicker
        selected={startDate}
        onChange={() => {}} 
        inline
        renderDayContents={(day, date) => renderDayContents(day, date)} 
      />
    </div>
  );
};

export default DatePreview;
