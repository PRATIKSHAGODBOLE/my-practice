import React, {useState} from 'react'

export default function WithOutContext() {
    const [userdetails, setuserDetails] = useState({
        name: 'Mayank',
        age:30
    })
    
  return (
    <div>
       <h2>This is Parent Component</h2>
       <hr></hr>
       <ChildComponent userDetails = {userdetails}/>
    </div>
  )
}

function ChildComponent (props){
    return(
        <>
        <h2>This is Child Component</h2>
       <hr></hr>
       <SubChildComponent userDetails = {props.userDetails}/>
        
        </>
    )
    
}

function SubChildComponent(props) {
    return(
        <>
        <h2>This is Sub ChildComponent</h2>
        <h4>UserName : {props.userDetails.name}</h4>
        <h4>UserAge : {props.userDetails.age}</h4>
        </>
    )
}