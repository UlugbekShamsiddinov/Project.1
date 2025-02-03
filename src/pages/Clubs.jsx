import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from "react";
import Loading from '../components/Loading';



export default function Clubs() {
  const [data_Sourse , set_dataSourse] = useState([])
    const [loading , setLoading] = useState(true)

  const getTrophies = ()=>{
    axios
    .get('https://67659546410f849996558f85.mockapi.io/clubs').then((res)=>{
      // console.log(res?.data);
      set_dataSourse(res?.data)
      
    }).catch((err)=>{
      // console.log(err.message);
      
    }).finally(()=>{
      // console.log('Finalliy get request');
      setLoading(false)
    })
  };

  useEffect(()=>{
    getTrophies()
  } , [])

 if(loading){
  return <Loading/>
 }

  return (
    <section className="text-gray-600 body-font bg-[#1a1a1a] dark:bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {
        data_Sourse?.map((item , id)=>{
          return (
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full" key={item?.id}>
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={item?.avatar}/>
        </a>
        <div class="mt-4">
          <h3 class="text-white text-xs tracking-widest title-font mb-1 dark:text-black">Material: { item?.material}</h3>
          <h2 class="text-white title-font text-lg font-medium dark:text-black">{item?.name}</h2>
          <p class="mt-1 text-white dark:text-black">Prise: { item?.prise}</p>
        </div>
      </div>
          )
        })
      }
    </div>
  </div>
</section>
  )
}
