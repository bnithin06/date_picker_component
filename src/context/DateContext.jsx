import React, { createContext, useState } from 'react';

const DateContext = createContext();

const DateProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [recurrence, setRecurrence] = useState({
    frequency: 'Daily',
    interval: 1,
    daysOfWeek: [],
    nthDay: null,
  });

  return (
    <DateContext.Provider
      value={{
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        recurrence,
        setRecurrence,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

export { DateContext, DateProvider };
