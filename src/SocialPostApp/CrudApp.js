import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function CrudApp() {
    const[posts, setposts] =  useState()
    const[post, setpost] = useState()// usestate for edit button
    const[newpost, setnewpost] = useState({id:"", title:"", body:"",})
    
   const[showeditFrom, setshoweditForm] = useState(false)//edit button bydefault value false
   const[showAddFrom, setshowAddForm] = useState(false)//add nre record button bydefault false
    useEffect(()=>{
      axios
      .get("http://127.0.0.1:3003/posts")
      .then(res=>setposts(res.data))
      .catch(err=>console.log(err))
    },[])
    console.log(posts)
    // edit button function
    function editPostDetails(postinfo){
      console.log(postinfo)
      setpost(postinfo)
      setshoweditForm(true) //in the function true
    }

    // update the data
    function UpdateRecord(){
      axios.put(`http://127.0.0.1:3003/posts/${post.id}`, newpost)
      .then(res=>{
        alert("Update data successfully")
        setshoweditForm(false)// when click on update button the form will be false
      })
      .catch(err=>console.log(err))
      window.location.reload()//refresh the page
    }

  //  Delete the Data
    function DeletePostDetails(postinfo){
      console.log(postinfo)
      axios.delete(`http://127.0.0.1:3003/posts/${postinfo.id}`)
      .then(res=>alert("Delete Data Successfully"))
      .catch(err=>console.log(err))
      window.location.reload()
    }
   
    // new record add function
    function AddRecord(){
      setshowAddForm(true)// and here true
    }

    // add new record and update in main List
   function CreateRecord(){
    axios.post(`http://127.0.0.1:3003/posts`, newpost)
    .then(res=>alert("Added new Data Successfully"))
      .catch(err=>console.log(err))
      window.location.reload()
   }
    
  return (
    <div className='container'>
             <h1 className='bg-warning text-center' >List Of Api</h1>

             {/* ----------------- */}
             <button type="text" className='btn btn-primary' onClick={AddRecord}>Let's create new record</button>
             {showAddFrom?
             <form>
              <lable htmlFor="">ID</lable>
              <input type="text" className='form-control'
              onChange={(e)=> setnewpost({...newpost, id:e.target.value})}/>
              <lable htmlFor="">Title</lable>
              <input type="text" className='form-control'
              onChange={(e)=> setnewpost({...newpost, title:e.target.value})}/>
              <lable htmlFor="">Body</lable>
              <input type="text" className='form-control'
              onChange={(e)=> setnewpost({...newpost, body:e.target.value})}/>

              <button type="button" className='btn btn-primary' onClick={CreateRecord}>Create Record</button>
             </form>

             :null}
             {/* ----------------- */}
             {/* edit button conditional rendering */}
             {showeditFrom?
             <form>
              <lable htmlFor="">ID</lable>
              <input type="text" defaultValue={post.id} className='form-control'
              // add newrecord we create usesate newpost
              onChange={(e)=> setnewpost({...newpost, id:e.target.value})}/>  

              <lable htmlFor="">Title</lable>
              <input type="text" defaultValue={post.title} className='form-control'
              onChange={(e)=> setnewpost({...newpost, title:e.target.value})}/>

              <lable htmlFor="">Body</lable>
              <input type="text" defaultValue={post.body} className='form-control'
              onChange={(e)=> setnewpost({...newpost, body:e.target.value})}/>

              <button type="button" className='btn btn-primary' onClick={UpdateRecord}>UpdateRecord</button>
             </form>

             : <table className="table">
             <thead>
               <tr>
                 <th scope="col">Id</th>
                 <th scope="col">Title</th>
                 <th scope="col">Body</th>
                 <th scope="col" colSpan={2} className='text-center'>Action</th>
               </tr>
             </thead>
             <tbody>
               {
               posts &&
               posts.map((post, i )=>(
                   <tr key={i}>
                       <td>{post.id}</td>
                       <td>{post.title}</td>
                       <td>{post.body}</td>
                      <td>
                       {/* post from usesate line no.06 */}
                       <button type="button" className='btn btn-danger btn-sm' onClick={()=>editPostDetails(post)}>Edit</button>
                       </td> 

                       <td>
                       {/* post from usesate line no.06 */}
                       <button type="button" className='btn btn-success btn-sm' onClick={()=>DeletePostDetails(post)}>Delete</button>
                       </td> 
                       
                       
                   </tr>
               ))
           
               }
             </tbody>
           </table>}
             
   
    </div>
  )
}
