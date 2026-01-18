import React from 'react'
import { useState } from 'react'
// import Card from './components/card'

const App = () => {
  const [user, setuser] = useState('');
  const [url, seturl] = useState('');
  const [desc, setdesc] = useState('');
  const [allusers, setallusers] = useState([])

  const submithandler =(e)=>{
    e.preventDefault()

    const oldusers = [...allusers]
    oldusers.push({user, url, desc})
    console.log(oldusers)
    setallusers(oldusers)

    console.log(user,url, desc)
    setuser('')
    seturl('')
    setdesc('')

  }
  const deleteuser = (idx)=>{
    const copyusers= [...allusers]
    copyusers.splice(idx,1)
    setallusers(copyusers)
  }

  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e)=>{
        submithandler(e)
      }} className='flex flex-wrap '>

        <input onChange={(e)=>{
          setuser(e.target.value)
          // console.log(e.target.value)
        }} value={user} type="text" placeholder="Enter your name"className=' text-xl font-semibold border-3 px-5 py-2 rounded  w-[44%] m-10'/>

        <input onChange={(e)=>{
          seturl(e.target.value)
        }} value={url} type="text" placeholder="Enter image URL"className='text-xl font-semibold border-3 px-5 py-2 rounded  w-[44%] m-10'/>

        <input onChange={(e)=>{
          setdesc(e.target.value)
        }} value={desc} type="text" placeholder="Enter description"className='text-xl font-semibold border-3 px-5 py-2 rounded  w-[44%] m-10'/>
        
        <button 
          className='text-xl font-semibold border-3 px-5 py-2 rounded  w-[44%] m-10 bg-emerald-700 active:scale-95'>Create user
        </button>

      </form>

      <div className='ps-4 py-10 flex gap-7 w-[100%]  flex-wrap bg-gray-500'>
        {allusers.map(function(elem, idx){
          return <div key={idx} className='flex overflow-hidden w-55  h-80 bg-white rounded items-center flex-col text-center p-5'>
        <img className='h-24 w-24 rounded-full' src={elem.url} alt="no" />
        <h1 className='text-black text-xl font-semibold'>{elem.user}</h1>
        <h5 className='text-base text-blue-500 my-3 font-semibold'>{elem.desc}</h5>
        <button onClick={()=>{
          deleteuser(idx)
        }} className='cursor-pointer bg-red-600 py-3 px-6 rounded text-white font-semibold '>Remove</button>
         </div>
        })}
      </div>
    </div>
  )
}

export default App




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
