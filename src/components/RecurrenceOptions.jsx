import React, { useContext } from 'react';
import { DateContext } from '../context/DateContext';

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useContext(DateContext);

  const handleRecurrenceChange = (e) => {
    setRecurrence({
      ...recurrence,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-4">
      <div>
        <label>Recurrence Frequency:</label>
        <select name="frequency" value={recurrence.frequency} onChange={handleRecurrenceChange}>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>
      <div>
        <label>Every:</label>
        <input
          type="number"
          name="interval"
          value={recurrence.interval}
          onChange={handleRecurrenceChange}
          min="1"
        />
        {recurrence.frequency.toLowerCase()}
      </div>
    </div>
  );
};

export default RecurrenceOptions;
