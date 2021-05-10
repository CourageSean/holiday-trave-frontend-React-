import React from 'react'
import { useContext } from 'react'
import { HolidayContext } from '../App'


export default function HolidayFinder() {
const{handleExplore,handleLocation,handleActivity} = useContext(HolidayContext)

  return (
        <div>
            
            <select onChange={(e) => {
            handleLocation(e)  
            }}>
                <option value="">Location</option>
                <option value="Japan">Japan</option>
                <option value="Dubai">Dubai</option>
            </select>
            <select onChange={ (e) => {
            handleActivity(e)  
            }  }>
                <option value="" >Activity</option>
                <option value="Sushi Restaurant">Sushi Restaurant</option>
                <option value="Dunes">Dunes</option>
            </select>
            <br/>
            <button onClick={handleExplore}>Explore</button>
            
            

        </div>
    )
}
