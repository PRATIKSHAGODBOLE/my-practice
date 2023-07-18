import React, { createContext, useContext, useState } from 'react';

const Store = createContext( null );

export default function WithContextAPI() {
  const [userDetails, setUserDetails] = useState({
    CAKE: 20,
  });

  
  function buyCake() {
    if(userDetails.CAKE == 0)
    {
      alert("No Cake Available")
    }
    setUserDetails({ ...userDetails, CAKE:(userDetails.CAKE) - 1 })
  }

  function buildCake(){
    setUserDetails({ ...userDetails, CAKE:(userDetails.CAKE) + 1 })
  }

  return (
    <Store.Provider value={{ userDetails, buyCake, buildCake }}>
      <hr></hr>
      <h2>This is Parent</h2>
      <h3>Counter 01</h3>
      <hr></hr>
      <ChildComponent />
    </Store.Provider>
  );
}

function ChildComponent() {
  const storeData = useContext(Store);
  return (
    <>
      <h2>This is Child Component</h2>
      <h3>Number of cakes in store: {storeData.userDetails.CAKE}</h3>
      <hr></hr>
      <SubChildComponent />
    </>
  );
}

function SubChildComponent() {
  const data = useContext(Store);
  return (
    <>
      <h2>This is Sub Child Component</h2>
      <h3>Number of cakes in store: {data.userDetails.CAKE}</h3>
      <h3>Build New Cake in store: {data.userDetails.CAKE}</h3>

      <button className='btn btn-success' onClick={data.buyCake}>BUY CAKE</button>
      <button className='btn btn-danger mx-3' onClick={data.buildCake}>BUILD CAKE</button>
      <hr></hr>
    </>
  );
}




