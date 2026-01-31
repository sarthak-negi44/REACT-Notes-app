import React, { useState } from 'react'
import { Pen } from 'lucide-react';

const App = () => {
   const [title, settitle] = useState("")
   const [detail, setdetail] = useState("")
   const [task, settask] = useState([])
 
  const submitHandler=(e)=>{
    e.preventDefault()

    const copytask = [...task];
    console.log(task)
    copytask.push({ title,detail});
    settask(copytask)
  
    
    settitle("")
    setdetail("")
  }
    const deleteHandler=()=>{
      console.log(" Note deleted")
      const copytask=[...task];
      copytask.pop();
      settask(copytask)
    }
  return (
    <div className='text-white lg:flex h-screen bg-[url("https://wallpapercave.com/wp/YoRerTP.jpg")] bg-cover bg-center '>
      <form onSubmit={(e)=>{

        submitHandler(e)
      }} className='flex items-start  flex-col gap-4 lg:w-1/2   p-10'>
        <h1 className='text-3xl font-bold'>Add Your Notes :-</h1>
                  

                  {/* first input */}
           <input                                     
           type="text"  placeholder='Enter the text' name="" id="" className='px-5 py-2 border-2 rounded outline-none w-full font-medium ' 
           value={title}
           onChange={(e)=>{
                settitle(e.target.value);
           }}
           />
                  {/* Second input */}
        <textarea 
        type="text"placeholder='Enter Details' className='px-5 py-2 border-2 rounded h-30 flex flex-row item-start w-full outline-none font-medium ' 
        value={detail}
          onChange={(e)=>{
            setdetail(e.target.value);
          }}
                
         />
        <button 
        className='bg-white active:bg-gray-500 active:scale-95 text-black px-5 py-2 w-full outline-none font-medium '
        >Add Notes
        </button>
  
        
     </form>
     <div className=' lg:w-1/2 lg:border-l-2 p-10 bg-gray-950  '>
     <h1 className='text-3xl font-bold'>Your Notes</h1>
      <div className='flex gap-5 flex-wrap items-start justify-items-start mt-5 h-[90%] overflow-auto'>
        
       {task.map(function(elem, idx){
      return  <div key={idx} className=' flex justify-between flex-col items-start h-52 w-40 rounded-2xl bg-[url("https://static.vecteezy.com/system/resources/thumbnails/012/420/108/small_2x/blank-notebook-plain-paper-texture-variation-collection-set-png.png")] bg-cover bg-center p-4 shadow-lg shadow-gray-800/50 '>
        <h2 className='text-black mt-4 absolute '><Pen /></h2>

       <div>
         <h1 className=' px-2 leading-tight  text-black font-bold pt-7'>{elem.title}</h1>
        <p className='px-2 text-gray-700 leading-tight text-xs'>{elem.detail}</p>
       </div>
       <button onClick={deleteHandler} className='bg-gray-600 w-full cursor-pointer active:scale-95 text-xs rounded-full mb-4'>Delete Note</button>
      </div>
       })}

           

      </div>
     </div>
    </div>
  )
}

export default App