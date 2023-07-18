
import React from 'react';
import Summary from './Summary';
import ReactDOM from 'react-dom/client';

let students=["Nisha Yadav","Pratiksha Godbole", "Rahul Ghodeswar", "Apeksha Sharma" , "Samir Kumar" , "Neha sharma" , " Harsh yadav" , "Nidhi patil"]
function App() {
  function btnClick(){
    alert("Reverse All the Elements")
    students.reverse()
    const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render ( <App />)
  }

  function promote(name){
   console.log("Promote",name)
   students = [name, ...students.filter((std)=> std !== name)]
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render ( <App />)
  }             
  return (
      <div className='container'>
      <table className="table table-hover table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Character</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    
      {
        students.map((student, i) => (
        <tr key={i}>
        <Summary name={student} index={i} callback={btnClick} promoteFun={promote} />
        </tr>
        ))
      }
   
  </tbody>
</table>
     </div>
    

  )
}

export default App;
