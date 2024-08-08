import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export const Cards = ({ title, description, state }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white mt-10 font-semibold shadow-cyan-800 text-center rounded-3xl border shadow-lg p-10 w-96">
      <h1 className="text-lg text-gray-700">{title}</h1>
      <div className=''>
        <p className={`text-xs text-gray-400 mt-4  ${isExpanded ? 'text-wrap' : 'line-clamp-3'}`}>
          {description}
        </p>
        <Link to={`/todo/${title}`} className='text-blue-400 text-sm'>{!isExpanded ? 'Read More':''}</Link>
      </div>
      <h1 className='text-sm mt-2'>{state}</h1>
    <div className='flex flex-col justify-center'>
    <button
        
        className="bg-indigo-600  py-1 mt-2 rounded-xl text-gray-100 uppercase "
      >
     <Link to={`/updateStatus/${title}`}>Update Status</Link>
      </button>
    
    </div>
    </div>
  );
};

