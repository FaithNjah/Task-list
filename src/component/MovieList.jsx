import React from 'react'
import { useState } from 'react'
import Movies from './Movies'

const MovieList = () => {
//use state for any thing that is dynamic
//adding to the set movie
    const [Movie, setMovie] = useState([{
      name: 'one',
      category: 'cartoon',
      id:1
    }])

const [name, setName] = useState()
const [category, setCategory] = useState()

const newName = e =>{
   setName(e.target.value)
  
}

const newCategory = e =>{
setCategory(e.target.value)
}

    const addMe = e =>{
       setMovie(prev =>[...prev, {name:name, category:category}])
        e.preventDefault()
        setName('')
        setCategory('')
    }
  return (
    <div>
        {Movie.map((prev) =>(
          
        <Movies
         name = {prev.name}
         id = {prev.id}
         category = {prev.category}
         />
   
))}

        <form onSubmit = {addMe}>
           <h1>Name <input type="text"  name = 'name' value = {name} onChange ={ newName}/></h1>
           <h3>Category<input type="text"  name = 'category' value = {category} onChange ={ newCategory}/></h3>
           <button>submit</button>
        </form>
    </div>
  )
}

export default MovieList
