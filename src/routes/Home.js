import React, { useEffect, useState } from 'react'
import Homeitems from '../components/Homeitems'
import {useSelector} from "react-redux"
import { useLoaderData } from 'react-router-dom'
const Home = () => {
// const[lod,setlod]=useState(true)
   const data= useSelector((state)=>state.items)
  //  console.log(data)

  return (
    <main>
        <div className="items-container">
       {data.map((ele,i)=>(
        <Homeitems key={i} item={ele}/>
       )) }
        </div>
    </main>
  )
}


export default Home