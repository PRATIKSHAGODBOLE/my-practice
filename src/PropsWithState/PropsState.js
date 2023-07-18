// import React from 'react'

// export default function PropsState(props) {
//   return (
//     <div className='container'>
//         <h5>{props.title}</h5>
//         <h5>{props.Body}</h5>

//     </div>
//   )
// }

// import React, { Component } from 'react'

// export default class PropsState extends Component {
//     constructor(props){
//         super(props)
//     }
//   render() {
//     return (
//       <div className='box'>
//        <h5>{this.props.title}</h5>
//        <p>{this.props.Body}</p>
//       </div>
//     )
//   }
// }


// import React, { Component } from 'react'

// export default class PropsState extends Component {
//     constructor(props){
//         super(props)
//     }

//   render() {
//         //Destructure
//     let {name, age} = this.props 
//     return (
//       <div className='box'>
//       <h5>{name}</h5>
//       <h5>{age}</h5>
//       </div>
//     )
//   }
// }


import React, { Component } from 'react'

export default class PropsState extends Component {
    constructor(props){
        super(props)
        this.state = {
        roll : this.props.roll,
        name : this.props.name
        }
    }

 update = () =>{
   this.setState({
    roll : 12,
    name : "Nisha"
    })
    }
  render() {
    return (
      <div>
      <h1 className='text-center text-danger'>Props With State</h1>
      <h5>{this.state.roll}</h5>
      <h5>{this.state.name}</h5>
      <button className='btn btn-primary' onClick={this.update}>Update</button>
     

      </div>
    )
  }
}



