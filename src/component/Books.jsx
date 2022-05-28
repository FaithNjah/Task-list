import React from 'react'


const Books = ({name, id, price}) => {
   
  return (
    <div className = 'books'>
       
        <h1>{name}</h1>
        <h3>{price}</h3>
        <h5>{id}</h5>
        
    </div>
  )
}

export default Books
