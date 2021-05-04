import axios from "axios"
import {useState} from "react"
import Nav from "./components/Nav"
import Home from "./components/Home"
import './App.css';

function App() {
  const[location,setLocation]=useState("")
  const[activity,setActivity]=useState("")


  const handleLocation = (e) => {
    console.log(e.target.value)
    setLocation(e.target.value)
  }

  const handleActivity = (e) => {
    console.log(e.target.value)
    setActivity(e.target.value)

  }

  const handleExplore = async () => {
    
    
    try {
      const response = await axios.get(`http://localhost:5000/explore/?location=${location}&activity=${activity}`)
      console.log(response)
    
    
    } catch (error) {
      console.log(error)
    }







  }

  return (
    <div className="App">
     
     <Nav/>
     <Home onHandleExplore={handleExplore} onChangeLocation={handleLocation} onChangeActivity={handleActivity}/>
    </div>
  );
}

export default App;
