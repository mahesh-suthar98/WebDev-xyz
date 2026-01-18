import React from 'react'

const card = () => {
  return (
    <div className='flex bg-white rounded items-center flex-col text-center p-5'>
      <img className='object-center object-cover h-24 w-24 rounded-full' src="https://images.pexels.com/photos/35283120/pexels-photo-35283120.jpeg" alt="" />
      <h1 className='text-black text-xl font-semibold'>NameMk</h1>
      <h5 className='text-base text-blue-500 my-3 font-semibold'>student</h5>
      <button className='cursor-pointer bg-red-600 py-3 px-6 rounded text-white font-semibold '>Remove</button>
    </div>
  )
}

export default card
