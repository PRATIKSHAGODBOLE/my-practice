import React, { useState} from 'react'

export default function Hook4() {
    const[name , setName] = useState({firstname:"", lastname:""})
    const[dname, setDname] = useState()

    let MyFun = ()=>{
        let fullname = (name.firstname + name.lastname)
        setDname(fullname)
    }
  return (
    <div>
    <input type="text" onChange={(e)=>setName({...name, firstname : (e.target.value)})}/>
    <input type="text" onChange={(e)=>setName({...name, lastname: (e.target.value)})}/>
    <button className='btn btn-primary' onClick={MyFun}>Update</button>
    <h1>{dname}</h1>
    <h1>{JSON.stringify(name)}</h1>

    </div>
  )
}
