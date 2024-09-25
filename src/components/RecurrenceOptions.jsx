import React, { useContext } from 'react';
import { DateContext } from '../context/DateContext';

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useContext(DateContext);

  // Handle changes to recurrence options
  const handleRecurrenceChange = (e) => {
    setRecurrence({
      ...recurrence,
      [e.target.name]: e.target.value,
    });
  };

  // Handle changes for days of the week (Weekly Recurrence)
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

  // Handle changes for nth day of the month (Monthly Recurrence)
  const handleNthDayChange = (e) => {
    setRecurrence({
      ...recurrence,
      nthDay: e.target.value,
    });
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      {/* Frequency Selection */}
      <div className="mb-4">
        <label>Recurrence Frequency:</label>
        <select name="frequency" value={recurrence.frequency} onChange={handleRecurrenceChange} className="ml-2 p-1 border">
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>

      {/* Interval Selection */}
      <div className="mb-4">
        <label>Every:</label>
        <input
          type="number"
          name="interval"
          value={recurrence.interval}
          onChange={handleRecurrenceChange}
          min="1"
          className="ml-2 p-1 border"
        />
        <span> {recurrence.frequency.toLowerCase()}</span>
      </div>

      {/* Weekly Recurrence: Specific Days of the Week */}
      {recurrence.frequency === 'Weekly' && (
        <div className="mb-4">
          <label>Select Days of the Week:</label>
          <div className="flex flex-wrap">
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
              <div key={day} className="mr-2">
                <input
                  type="checkbox"
                  value={day}
                  checked={recurrence.daysOfWeek.includes(day)}
                  onChange={handleDaySelection}
                  className="mr-1"
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
