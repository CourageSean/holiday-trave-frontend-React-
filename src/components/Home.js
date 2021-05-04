import React from 'react'
import Hero from "./Hero"
import Test from "./Test"
import {useState} from "react"

export default function Home({onHandleExplore,onChangeLocation,onChangeActivity}) {
    
    return (
        <div>
           <Hero onHandleExplore={onHandleExplore} onChangeLocation={onChangeLocation} onChangeActivity={onChangeActivity} />
           <Test/>
        </div>
    )
}
