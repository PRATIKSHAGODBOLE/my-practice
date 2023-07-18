import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inc_Counter,dec_Counter } from './CounterApp/CounterAction'
//useSelector is an HOOKS

export default function CounterContainer1() {
  //state ki data ko lekar aayega from reducer file
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  return (
    <div className='container'>
       <h2>Counter: {counter} </h2>
      <button className='btn btn-info mx-3'onClick={()=>dispatch(inc_Counter())}>Increment</button>
      <button className='btn btn-success' onClick={()=>dispatch(dec_Counter())}>Decrement</button>
    </div>
  )
}
