import React from 'react'


export default function HolidayFinder({onHandleExplore,onChangeLocation,onChangeActivity}) {


  return (
        <div>
            
            <select onChange={(e) => {
            onChangeLocation(e)  
            }}>
                <option value="">Location</option>
                <option value="Japan">Japan</option>
                <option value="Dubai">Dubai</option>
            </select>
            <select onChange={ (e) => {
            onChangeActivity(e)  
            }  }>
                <option value="" >Activity</option>
                <option value="Sushi Restaurant">Sushi Restaurant</option>
                <option value="Dunes">Dunes</option>
            </select>
            <br/>
            <button onClick={onHandleExplore}>Explore</button>
            
            

        </div>
    )
}
