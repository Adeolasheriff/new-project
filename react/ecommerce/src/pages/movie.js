import React from 'react'
import { Link } from 'react-router-dom'

export default function Movie() {
  return (
    <div className='my-10 text-center grid grid-rows-2  h-screen  bg-yellow-500 overflow-scroll'>
    <h2 className='text-xl text-stone-700 text-center font-semibold mb-8'>the best pizza 
    <br />
    <span className='text-yellow-500 tracking-[9px]'> straight outta the oven,straight to u </span> 
    </h2>
       <div>
       <h5 className='mb-4 text-sm text-stone-600 md:text-base'>welcome: please start telling us your name</h5>
      <input type="text
       " placeholder={'your full name'}
       className='h-10 w-72'
       />
        </div>
       
       <div className='bg-stone-800 text-stone-200 mt-14 py-4 space-x-4 flex justify-between'>
       <p>
        <span>23 pizzas</span>
       <span className='font-semibold uppercase py-4'>$23.45</span>
        </p>
        <Link to='./product'>home sweet</Link>
       </div>
        </div>
  )
}
