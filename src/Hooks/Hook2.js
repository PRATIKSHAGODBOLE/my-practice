import React, { useState } from 'react'

export default function Hook2() {
    const [first, setfirst] = useState()
    const [Second, setSecond] = useState()

    let MyFun = () => {
        setSecond(first)
    }
  return (
    <div>
     <input type="text" onChange={(e) => setfirst(e.target.value)} />
     <button className='btn btn-primary' onClick={MyFun}> Update</button>
     <h1>{Second}</h1>

    </div>
  )
}
