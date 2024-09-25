import React, { useContext } from 'react';
import { DateContext } from '../context/DateContext';

const DatePreview = () => {
  const { startDate, endDate, recurrence } = useContext(DateContext);

  // Render selected days of the week (for weekly recurrence)
  const renderDaysOfWeek = () => {
    if (recurrence.frequency === 'Weekly' && recurrence.daysOfWeek.length > 0) {
      return <p>Selected Days: {recurrence.daysOfWeek.join(', ')}</p>;
    }
    return null;
  };

  // Render nth day and week details (for monthly recurrence)
  const renderNthDay = () => {
    if (recurrence.frequency === 'Monthly') {
      return (
        <p>
          Recurs on: {recurrence.nthDay === 'last' ? 'Last' : recurrence.nthDay}{' '}
          {recurrence.nthDayWeek}
        </p>
      );
    }
    return null;
  };

  // General preview for all recurrence patterns
  const renderPreview = () => {
    return (
      <div>
        <p>Start Date: {startDate ? startDate.toDateString() : 'Not set'}</p>
        <p>End Date: {endDate ? endDate.toDateString() : 'Not set'}</p>
        <p>
          Recurrence: {recurrence.frequency}, every {recurrence.interval}{' '}
          {recurrence.frequency.toLowerCase()}
        </p>
        {/* Render Weekly or Monthly specific details */}
        {renderDaysOfWeek()}
        {renderNthDay()}
      </div>
    );
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <h2 className="font-semibold mb-2">Selected Recurring Dates Preview:</h2>
      {renderPreview()}
    </div>
  );
};

export default DatePreview;
