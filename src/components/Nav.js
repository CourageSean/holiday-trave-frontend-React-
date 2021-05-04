import React from 'react'

export default function Nav() {
    return (
        <nav>
            <div><img src="./image/logo.png" alt=""/></div>
           <ul>
               <li>Home</li>
               <li>Destinations</li>
               <li>About</li>
               <li>Partner</li>
               <li> <button className="first-btn">Login</button>  </li>
               <li><button className="second-btn">Register</button> </li>
               </ul> 
        </nav>
    )
}
