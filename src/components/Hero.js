import React from 'react'
import HolidayFinder from "./HolidayFinder"

export default function Hero({onHandleExplore,onChangeLocation,onChangeActivity}) {
    return (
        <div className="hero-container">
            <div>
                <h1>Explore and <br/>Travel</h1>
                <p>Holiday finder</p>
                <HolidayFinder  onHandleExplore={onHandleExplore} onChangeLocation={onChangeLocation} onChangeActivity={onChangeActivity}/>
            </div>
            <div className="hero-img-wrapper">
                <img src="./image/thousand.png" alt=""/>
            </div>
        </div>
    )
}
