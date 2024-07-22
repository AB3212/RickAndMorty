
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [dob, setDob] = useState('');
  const [ageDetails, setAgeDetails] = useState({
    years: null,
    months: null,
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  });

  useEffect(() => {
    if (dob) {
      const interval = setInterval(() => calculateAge(dob), 1000);
      return () => clearInterval(interval);
    }
  }, [dob]);

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const now = new Date();
    
    const years = now.getFullYear() - birthDate.getFullYear();
    const months = now.getMonth() - birthDate.getMonth();
    const days = now.getDate() - birthDate.getDate();
    const hours = now.getHours() - birthDate.getHours();
    const minutes = now.getMinutes() - birthDate.getMinutes();
    const seconds = now.getSeconds() - birthDate.getSeconds();

    const totalMonths = (years * 12) + months;
    const totalDays = Math.floor((now - birthDate) / (1000 * 60 * 60 * 24));
    const totalHours = Math.floor((now - birthDate) / (1000 * 60 * 60));
    const totalMinutes = Math.floor((now - birthDate) / (1000 * 60));
    const totalSeconds = Math.floor((now - birthDate) / 1000);

    setAgeDetails({
      years: totalMonths / 12,
      months: totalMonths % 12,
      days: totalDays,
      hours: totalHours % 24,
      minutes: totalMinutes % 60,
      seconds: totalSeconds % 60,
    });
  };

  const handleChange = (event) => {
    setDob(event.target.value);
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <input      
        type="date" 
        value={dob} 
        onChange={handleChange} 
      />
      {ageDetails.years !== null && (
        <div>
          <h2>Your age is:</h2>
          <p>{Math.floor(ageDetails.years)} years</p>
          <p>{ageDetails.months} months</p>
          <p>{ageDetails.days} days</p>
          <p>{ageDetails.hours} hours</p>
          <p>{ageDetails.minutes} minutes</p>
          <p>{ageDetails.seconds} seconds</p>
        </div>
      )}
    </div>
  );
};

export default App;

