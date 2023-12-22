import React from 'react'

export const ShowWorksPages = ({work,author,delFunc}) => {
  
  // console.log(work)
  return (
    <div  className={  work.status==="Pending" ? 'bg-gradient-to-r from-[#08b308] to-[#026730] bg-right-bottom hover:bg-top    p-4 rounded my-4' :'   p-4 rounded my-4 bg-gradient-to-r from-[#0074bc] to-[#0272ba]'}>
      <div className=' flex justify-between items-start '>

      <div className=' text-2xl text-white font-semibold uppercase '> {work.title}</div>
      <div onClick={()=>delFunc(work._id)} className=' cursor-pointer text-2xl text-white transition-all duration-150 hover:animate-pulse hover:text-black font-semibold    ' >x </div>
      </div>
      <div className=' text-lg my-4 text-yellow-50'> {work.description}</div>
      <div> <span className='font-semibold'>  Author :</span> {author}</div>
      
      <div className=' flex justify-between'>
        <div><span className='font-semibold'>  Dated : </span>{work.addedDate.split('T')[0]}</div>
      <div className={` font-semibold ${work.status==="Pending" ? "text-red-300 animate-bounce ": "text-blue-200" } uppercase  `}>{work.status}</div>

      </div>
    </div>
  )
}
