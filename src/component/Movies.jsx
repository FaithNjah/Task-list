import React from 'react'

const Movies = ({name, id, category}) => {
 
  return (
    <div>
       <h1>{name}</h1>
        <h3>{category}</h3>
        <h5>{id}</h5>
    </div>
  )
}

export default Movies
