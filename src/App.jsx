import React from 'react';
import DatePickerComponent from './components/DatePicker';
import RecurrenceOptions from './components/RecurrenceOptions';
import DatePreview from './components/DatePreview';

const App = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">Date Picker with Recurring Options</h1>
      <DatePickerComponent />
      <RecurrenceOptions />
      <DatePreview />
    </div>
  );
};

export default App;
