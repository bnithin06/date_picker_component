import React, { useContext } from 'react';
import { DateContext } from '../context/DateContext';

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useContext(DateContext);

  // Handling the changes to recurrence options
  const handleRecurrenceChange = (e) => {
    setRecurrence({
      ...recurrence,
      [e.target.name]: e.target.value,
    });
  };

  // Handling changes for days of the week (Weekly Recurrence)
  const handleDaySelection = (e) => {
    const { value, checked } = e.target;
    let updatedDays = [...recurrence.daysOfWeek];

    if (checked) {
      updatedDays.push(value);
    } else {
      updatedDays = updatedDays.filter((day) => day !== value);
    }

    setRecurrence({
      ...recurrence,
      daysOfWeek: updatedDays,
    });
  };

  // Handling changes for nth day of the month (Monthly Recurrence)
  const handleNthDayChange = (e) => {
    setRecurrence({
      ...recurrence,
      nthDay: e.target.value,
    });
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg bg-slate-200">
      {/* Frequency Selection */}
      <div className="mb-4">
        <label className='text-gray-700 font-bold mb-2'>Recurrence Frequency : </label>
        <select name="frequency" value={recurrence.frequency} onChange={handleRecurrenceChange} className="ml-2 p-1 border rounded">
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>

      {/* Interval Selection */}
      <div className="mb-4">
        <label className='text-gray-700 font-bold mb-2'>Every : </label>
        <input
          type="number"
          name="interval"
          value={recurrence.interval}
          onChange={handleRecurrenceChange}
          min="1"
          className="ml-2 p-1 border rounded"
        />
        <span> {recurrence.frequency.toLowerCase()}</span>
      </div>

      {/* Weekly Recurrence: Specific Days of the Week */}
      {recurrence.frequency === 'Weekly' && (
        <div className="mb-4 h-1/2">
          <label className='mb-22 text-2xl text-slate-800 underline'>Select Days of the Week : </label>
          <div className="flex flex-wrap mt-3">
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
              <div key={day} className="mr-3">
                <input
                  type="checkbox"
                  value={day}
                  checked={recurrence.daysOfWeek.includes(day)}
                  onChange={handleDaySelection}
                  className="mr-2"
                />
                <label>{day}</label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Monthly Recurrence: Nth Day of the Month */}
      {recurrence.frequency === 'Monthly' && (
        <div className="mb-4">
          <label>Choose the nth day of the month:</label>
          <select name="nthDay" value={recurrence.nthDay} onChange={handleNthDayChange} className="ml-2 p-1 border">
            <option value="1">First</option>
            <option value="2">Second</option>
            <option value="3">Third</option>
            <option value="4">Fourth</option>
            <option value="5">Fifth</option>
            <option value="last">Last</option>
          </select>

          <select name="nthDayWeek" value={recurrence.nthDayWeek} onChange={handleRecurrenceChange} className="ml-2 p-1 border">
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default RecurrenceOptions;
