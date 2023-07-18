import React, { useState} from 'react'

export default function Hook3() {
    const[marks, setMarks] = useState({sub01  :" ", sub02 : " ", sub03 : " " })
    const[dmark, setDmarks] = useState()

    let MyFun = ()=>{
        let total = marks.sub01 + marks.sub02 + marks.sub03
        setDmarks(total)
    }
  return (
    <div>
     <input type="text" onChange={(e)=>setMarks({...marks, sub01 : parseInt(e.target.value)})}/>
     <input type = "text" onChange={(e)=> setMarks({...marks, sub02 : parseInt(e.target.value)})}/>
     <input type= "text" onChange={(e)=> setMarks({...marks, sub03 : parseInt(e.target.value)})} />

     <button className='btn btn-success' onClick={MyFun}>Update</button>
     <h1>{dmark}</h1>
     
    </div>
  )
}
