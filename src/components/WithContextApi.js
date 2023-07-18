import React, { createContext, useContext, useState } from 'react'

const store  = createContext(null)
export default function WithCotextAPI() {
    const [userDetails, setuserDetails] = useState({
        name: 'Vinod',
        age:20
    })
    function UpdateAge()
    {
        setuserDetails({...userDetails, name : "rahul" , age:30})
    }
  return (
    <div>
    <store.Provider value={{ userDetails, UpdateAge }}> {/*store ke andar userDetails ke nam se pada hai*/}

        <h2>This is Parent</h2>
        <hr /> 
        <ChildComponent/>

    </store.Provider>
    </div>
  )                                       
}

function ChildComponent(){
    const storeData = useContext(store) //store ke data ko use krna chahta hu (store ko storeData me dal diya)
    return (                             //useContext(store) store ko use kr rhe
        <>
        <h2>This is Child Component</h2>
        <h3>
            Name: {storeData.userDetails.name}  {/* when button click update name here*/}
        </h3>
        <hr />
        <SubChildComponent/>
        </>
    )
}

function SubChildComponent(){
    const Data = useContext(store) //store ko use krna
    return (
        <>
        <h2>This is Sub Child Component</h2>
        <h4>Name : {Data.userDetails.name}</h4>
        <h4>Age: {Data.userDetails.age}</h4>
        <button className='btn btn-danger' onClick={Data.UpdateAge}>Update Age</button>
        </>
    )
}