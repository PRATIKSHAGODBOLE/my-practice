import React from 'react'

export default function Card(props) {
    // Distructure
    let {text} = props.Name
  return (
    <div>
        <div className='row'>
        <div className="card"  style = {{width : "18rem"}}>
  <img src={props.Name.imgSrc} className="card-img-top" />
    <h5 className="card-title">{props.Name.title}</h5>
    <p className="card-text">{text}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
    
  )
}
