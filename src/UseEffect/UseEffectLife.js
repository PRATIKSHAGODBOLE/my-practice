import React, { useState } from 'react'

export default function UseEffect(props) {
    const[text, setText] = useState()
    let {header} = props


    let change =()=> {(e)=>setText(e.target.value)}

    let Uppercase = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    let Lowercase = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    let Clearcase = () =>{
        let newText = " "
        setText(newText)
    }
  return (
    <div> 
        <h1 className='text-primary'>{header}</h1>
        <textarea
        row="6"
        value={text}
        onChange={change}/>
     <button className='btn btn-primary' onClick={Uppercase}>Uppercase</button>
     <button className='btn btn-primary' onClick={Lowercase}>Lowercase</button>
     <button className='btn btn-primary' onClick={Clearcase}>Clearcase</button>
     
     <p>{text? text.split("").length:0} word {text.length} charecters</p>
     <h1>{text}</h1>

    </div>
  )
}
