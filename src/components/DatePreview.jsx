import React, { useContext } from 'react';
import { DateContext } from '../context/DateContext';

const DatePreview = () => {
  const { startDate, endDate, recurrence } = useContext(DateContext);

  const renderPreview = () => {

    return (
      <div>
        <p>Start Date: {startDate ? startDate.toDateString() : 'Not set'}</p>
        <p>End Date: {endDate ? endDate.toDateString() : 'Not set'}</p>
        <p>Recurrence: {recurrence.frequency}, every {recurrence.interval}</p>
      </div>
    );
  };

  return (
    <div className="p-4 border">
      <h2>Selected Recurring Dates Preview:</h2>
      {renderPreview()}
    </div>
  );
};

export default DatePreview;
