import React from 'react';
import DatePickerComponent from './components/DatePicker';
import RecurrenceOptions from './components/RecurrenceOptions';
import DatePreview from './components/DatePreview';

const App = () => {
  return (
    <div className="container mx-auto p-6  ">
      <h1 className="mb-7 text-4xl text-blue-900">Date Picker with Recurring Options : </h1>
      <div className="flex">
        <div className="w-1/2 pr-4">
          <DatePickerComponent />
          <RecurrenceOptions />
        </div>
        <div className="w-1/2 pl-4">
          <DatePreview />
        </div>
      </div>
    </div>
  );
};

export default App;
