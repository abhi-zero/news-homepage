import React from 'react'

export default function Card({
  imgUrl,
  title,
  body,
  num
})   
{
    console.log(imgUrl);
  return (
    <div  className='group max-w-[460px] grid grid-cols-3 md:grid-cols-5 gap-5 items-center-safe cursor-pointer hover:text-[#F15E50]'>
      <div
        className='col-start-1'
      >
        <img className='w-[80px] object-cover md:w-[110px] md:h-[120px]' src={imgUrl} alt={title} />
      </div>
      <div
        className='col-start-2 col-end-4 md:col-end-6'
      >
        <h2 className='text-2xl md:text-4xl font-bold text-[#F15E50]'>{num}</h2>
        <h3 className='font-bold md:text-xl text-[#00001A] group-hover:text-[#F15E50] transition-colors duration-300 ease-in-out'>{title}</h3>
        <p className='h-[3rem] text-ellipsis overflow-x-hidden text-[#00001A]'>{body}</p>
      </div>
    </div>
  )
}

