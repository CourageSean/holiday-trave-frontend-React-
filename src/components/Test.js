
import React from 'react'
import {useState} from "react"



export default function Test() {
    const [name,setName]= useState("")
    const [email,setEmail]= useState("")
const [users,setUsers]=useState([{
    "id": 1,
    first_name: "Cleavland",
    "email": "cgrace0@blog.com"
  }, {
    "id": 2,
    first_name: "Bobbie",
    "email": "bjacop1@cnn.com"
  }, {
    "id": 3,
    first_name: "Renee",
    "email": "rdudek2@examiner.com"
  }])

const handleName = (e) => {
  setName(e.target.value)
}
const handleEmail = (e) => {
  setEmail(e.target.value)
}

const addContact = () => {
  const newContact = {first_name:name,
  "email":email}
   
  setUsers([...users,newContact])
  console.log(users)
}

    return (
        <div>
            <form action="" onSubmit={addContact}>
                <input onChange={handleName}  type="text" placeholder="firstname"/>
                <input onChange={handleEmail}  type="text" placeholder="email"/>
                <input  type="submit" value="Add"/>
                
            </form>
            
            {users.map((elt,i) =>(<h4 key={i}>{elt.first_name}</h4>) )}
        </div>
    )
}
