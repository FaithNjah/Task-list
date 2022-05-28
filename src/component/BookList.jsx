import React from 'react'
import Books from './Books'
import { useState } from 'react'
 

const BookList = () => {

    const [Book, setBook] = useState([
        {
            name: "As sure as the dawn",
            price: 50,
            id:1
        },
        {
            name: "Lion King",
            price: 30,
            id:2
        },
        {
            name: "Prisoner of birth",
            price: 40,
            id:3
        }
    ])
  return (
    <div>
        
      {Book.map((prev) =>(
          
               <Books
                name = {prev.name}
               id = {prev.id}
               price = {prev.price}
                />
          
      ))}
   
    </div>
  )
}

export default BookList
