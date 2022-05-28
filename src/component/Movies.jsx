import React from 'react'

const Movies = ({name, id, category}) => {
 
  return (
    <div>
       <h1>{name}<button onchange ={clear}>Delete</button></h1>
        <h3>{category}<button>Delete</button></h3>
        <h5>{id}</h5>
    </div>
  )
}

export default Movies
