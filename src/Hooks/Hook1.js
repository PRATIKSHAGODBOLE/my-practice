import React, { useState } from 'react'

export default function Hook1() {
    const[roll, setRoll] = useState('Pratiksha')
    const [name , setName] = useState(10)

    let MyFun = () =>{
        setRoll("Rahul")
        setName(11)
    }
  return (
    <div>
      <h5>{roll}</h5>
      <h5>{name}</h5>
      <button className='btn btn-primary' onClick={MyFun}>Update</button>
    </div>
  )
}
