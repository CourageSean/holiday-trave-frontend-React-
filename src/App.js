import axios from 'axios';
import React, { useState,useContext } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import './App.css';

export const HolidayContext = React.createContext()

function App() {
  const [location, setLocation] = useState('');
  const [activity, setActivity] = useState('');

  const handleLocation = (e) => {
    console.log(e.target.value);
    setLocation(e.target.value);
  };

  const handleActivity = (e) => {
    console.log(e.target.value);
    setActivity(e.target.value);
  };

  const handleExplore = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5003/explore/?location=${location}&activity=${activity}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HolidayContext.Provider value={{handleExplore,handleLocation,handleActivity}}>

    < div className="App"  >
      <Nav />
      <Home
      
      />
    </ div >
    </HolidayContext.Provider>
  );
}

export default App;
