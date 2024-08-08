import React from 'react'
import { Circles } from 'react-loader-spinner'
export const Loader = () => {
  return (
    <div className="h-screen flex text-center justify-center items-center font-bold text-6xl xl:ml-40"><Circles
  height="80"
  width="80"
  color="#0000FF"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
  <br></br>
  <h1 className='text-xl'>User not found</h1></div>
  )
}
