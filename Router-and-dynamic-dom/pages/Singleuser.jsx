import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Singleuser = () => {
  const [Data , setData] = useState(null)
const { id } = useParams()
  

useEffect(() =>{
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(res => res.json())
  .then((res)=>{
    setData(res)
  }).catch((err)=>{
    console.log(err);
    
  })

} , [])

  return (
   <>
   <div> Singleuser {id} </div>
   <h1>{Data ? Data.name : 'loading...'}</h1>
   </>
  )
}

export default Singleuser
