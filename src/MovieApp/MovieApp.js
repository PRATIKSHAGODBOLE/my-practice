import React from 'react'
import Movies from './Movies'
import Card from './Card'

export default function MovieApp() {
  return (
    <div className='container'>
        <div className='row'>
        <h1 className='text-center text-danger'>Movie - App</h1>
        {
     Movies.map((Movie, i) => (
        <div className='col-md-4'>
        <Card Name={Movie} key={i} />

        </div>
     ))
}
     </div>
    </div>
  )
}
