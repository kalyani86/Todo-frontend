

import React, { useState } from 'react';
import { Cards } from '../components/Cards';

export const UpdateStatus = () => {
  const arr = [
    { title: 'Title 1', description: 'This is lorem a sample description that is quite long and needs to be truncated for better UI/UX. This is additional text to ensure the content is long enough to be truncais is lorem a sample description that is quite long and needs to be truncated for better UI/UX. This is additional text to ensure the content is long enough to be truncais is lorem a sample description that is quite long and needs to be truncated for better UI/UX. This is additional text to ensure the content is long enough to be truncais is lorem a sample description that is quite long and needs to be truncated for better UI/UX. This is additional text to ensure the content is long enough to be truncais is lorem a sample description that is quite long and needs to be truncated for better UI/UX. This is additional text to ensure the content is long enough to be truncated.' },
    { title: 'Title 2', description: 'Another lengthy description that should be truncated initially and can be expanded to see more.' },
    { title: 'Title 3', description: 'More sample text that shows how truncation works and how to expand it.' },
    { title: 'Title 4', description: 'Final sample text with enough content to demonstrate the read more feature.' },
  ];

  const [add,setadd]=useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleReadMore = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className=' bg-slate-100'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='mt-10 font-bold text-3xl'>Status of title Todo</h1>
        <div>
          {arr.map((ele, index) => (
            <div key={index} className='bg-white mt-10 font-semibold shadow-cyan-800 rounded-3xl border shadow-lg p-10 '>
              <h1>Date</h1>
              <div className='max-w-xs md:max-w-3xl'>
                <p className={`text-xs text-gray-400 mt-4 ${expandedItems[index] ? 'text-wrap' : 'line-clamp-3'}`}>
                  {ele.description}
                </p>
              </div>
              <button
                onClick={() => toggleReadMore(index)}
                className="text-sm text-blue-400"
              >
                {expandedItems[index] ? 'Read Less' : 'Read More'}
              </button>
              
            </div>
          ))}
          {add?
           <div className="mb-6 bg-white mt-10 font-semibold shadow-cyan-800 rounded-3xl border shadow-lg p-10 ">
              <h1>{new Date().toDateString()}</h1>
           
           <label className="block mb-2 mt-2 text-sm text-gray-600 dark:text-gray-400">
             Add your Task Details Here
           </label>
           <input
             type="text"
             name="status"
             id="status"
             placeholder="Details here"
             className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
           />
         <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Add</button>
         </div>:''}
        </div>
        <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide" onClick={(e)=>{setadd(true)}}>+</button>
        <button className="bg-indigo-600  mb-4 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">submit Todo</button>
      </div>
    </div>
  );
};
