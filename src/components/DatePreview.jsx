import React, { useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DateContext } from '../context/DateContext';

const DatePreview = () => {
  const { startDate, endDate, recurrence } = useContext(DateContext);

  // hightlight the dates based on the recurr mode selection
  const HightLightDates=(date)=>{
    if (recurrence.frequency==='Daily'){
      return isInRange(date);
    }
    else if(recurrence.frequency==='Weekly'){
      // console.log('weekly is selected');
      return isInRange(date) && isWeeklyRecurrence(date);
    }
    else if(recurrence.frequency==='Yearly'){
      // console.log('recurr yearly is selected');
      return isYearlyRecurrence(date);
    }
    else if(recurrence.frequency==='Monthly'){
      // console.log('monthly reucrr is selected');
      return isMonthlyRecurrence(date);
    }
    return false;
  }



  // Function to check if a date is between the start and end dates
  const isInRange = (date) => {
    const normalizedDate = new Date(date).setHours(0, 0, 0, 0);
    const normalizedStartDate = new Date(startDate).setHours(0, 0, 0, 0);
    
    if (!endDate && recurrence.frequency==='Weekly') {
      return normalizedDate >= normalizedStartDate;
    }
    const normalizedEndDate = new Date(endDate).setHours(0, 0, 0, 0);

    return normalizedDate >= normalizedStartDate && normalizedDate <= normalizedEndDate;
  };




  // below functions will handle the weely recurr option
  const getDayName = (date) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getDay()];
  };


  const isWeeklyRecurrence = (date) => {
    const dayName = getDayName(date);
    // Check if date is before or equal to endDate
    const isBeforeEndDate = !endDate || date <= endDate; 

    return recurrence.daysOfWeek.includes(dayName) && isBeforeEndDate;
  };


  // below functions are handle the yearly recurr slection

  const isYearlyRecurrence = (date) => {

    if (!startDate) {
      return false; 
    }

    const startMonth = startDate.getMonth(); 
    const startDay = startDate.getDate(); 
    const startYear = startDate.getFullYear();
  
    const currentMonth = date.getMonth(); 
    const currentDay = date.getDate();      
    const currentYear = date.getFullYear(); 
  
    // Match only the month and day, and allow for any year after startDate's year
    return currentMonth === startMonth && currentDay === startDay && currentYear >= startYear;
  };



  const isMonthlyRecurrence = (date) => {
    // If the recurrence involves selecting nth occurrence of a day of the week (e.g., "first Monday")
    if (recurrence.nthDay && recurrence.nthDayWeek) {
      const nthDayMatch = calculateNthDayOfMonth(date.getFullYear(), date.getMonth());
      // If nth occurrence matches and the date matches the calculated nth day
      return nthDayMatch && date.getTime() === nthDayMatch.getTime();
    }
  
    // Specific day of the month (e.g., "15th of every month")
    if (recurrence.specificDay) {
      return date.getDate() === parseInt(recurrence.specificDay);
    }
  
    return false;
  };
  
  // it calculates the nth day of the month
  const calculateNthDayOfMonth = (year, month) => {
    const weekdayIndex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(
      recurrence.nthDayWeek
    );
  
    let count = 0;
    let nthDayMatch = null;
  
    for (let day = 1; day <= 31; day++) {
      const currentDate = new Date(year, month, day);
      if (currentDate.getMonth() !== month) break;
  
      if (currentDate.getDay() === weekdayIndex) {
        count++;
        if (count === parseInt(recurrence.nthDay)) {
          nthDayMatch = currentDate;
          break;
        }
      }
    }
  
    return nthDayMatch;
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <h2 className="font-bold mb-2 text-2xl">Visual Preview:</h2>
      <p className=' mb-4'>Selected recurring dates displayed on the calendar:</p>
      <div className='flex justify-center'>
      <DatePicker
          className='mt-15 flex'
          inline
          selected={startDate} // Can be either startDate or endDate
          onChange={()=>{}}
          dayClassName={(date) =>
            HightLightDates(date) ? "bg-yellow-400 text-white rounded-full" : undefined
          }
          renderDayContents={(day, date) => {
            return <div>{day}</div>;
          }}
        />
      </div>
    </div>
  );
};

export default DatePreview;
