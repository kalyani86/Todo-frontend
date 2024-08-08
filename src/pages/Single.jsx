import React from 'react'
import { Link } from 'react-router-dom'
export const Single = () => {
  return (<>
    <div className='h-screen bg-slate-100 flex flex-col items-center justify-center'>
    <div className="bg-white  text-center rounded-3xl border shadow-lg shadow-blue-500 p-10  w-10/12 md:w-7/12">
   
    <h2 className='font-bold text-blue-400 text-xl'>title</h2>
    
    <hr></hr>
  
    <div className='mt-4'>
   <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reiciendis, illum dolorem temporibus eveniet facilis ipsum autem? A dolores rerum quibusdam aspernatur perferendis voluptas? Eaque officiis nesciunt nihil accusamus eos?
   Optio, corrupteprehenderit ullam exercitationem maiores, eveniet quasi numquam! Corrupti, suscipit dignissimos minus ullam voluptatibus quo quod nemo sint dolores animi expedita aut vitae similique quos.
   Tempore dolores, at error erendis a! Fugit modi deleniti officiis, sit ipsum magni. Ullam officia numquam reprehenderit corrupti ab, autem voluptatum deserunt fugiat, quae deleniti dolor in dicta.</p>
    </div>
    
    
    <div className='flex flex-row justify-between mt-4'>
    <h2 className=''>start Date</h2>
    <h2 className=''>end Date</h2>
   </div>
   <div className='flex flex-row justify-between mt-1'>
    <h2 className=''>1/23/4</h2>
    <h2 className=''>2/4/6</h2>
   </div>
   <h1>state</h1>
   <div className='flex flex-col'>
   <button
        
        className="bg-indigo-600 px-4 py-2 mt-2 rounded-3xl text-gray-100 font-semibold uppercase "
      >
       <Link to={`/updateStatus/${1}`}>Update Status</Link>
      </button>
     
   </div>
   
  </div>
  </div>
  </>
  )
}
