import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [userproduct , setuserproduct] = useState(null)




  const Nevigate = useNavigate()

  useEffect(()=>{ 

   async function getData (){
      
      try{
        const Data = await fetch('https://fakestoreapi.com/users')
        const  apiData = await Data.json()  
        console.log(apiData)
        setuserproduct(apiData) 

      }
      catch(err){
        console.log(err);
        
      }
      
      
    }
    getData()
   
  } , [])

  function sendData (abc){
  console.log(abc);
  Nevigate(`Singleuser/:${abc.id}`);
  }

  return (
    <div>
  <h1 className='text-center text-3xl font-bold mb-[10px]'>Hello Router</h1>
  <div className=' flex flex-wrap gap-[50px] justify-center'>
  { 
 userproduct ? userproduct.map((item)=>{
  return <div key={item.id} className="w-[300px] mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex  flex-col justify-center text-center">
  <div className="p-6 flex  flex-col justify-center">
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">{item.name.firstname}</h1>
      <p className="text-gray-700 mb-4">{item.phone}</p>
      <p className="text-gray-500 text-sm">{item.email}</p>
  </div>
  <div className="border-t border-gray-200 flex  flex-col justify-center">
      <div className="p-4 flex  flex-col justify-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => sendData(item)}>Contact</button>
      </div>
  </div>
</div>

 }) : <h1>no data</h1> }
  </div>
 
    </div>
  )
}

export default Home
