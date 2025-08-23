import React from 'react'
import { newSection } from '../../content'

export default function NewArticles() {
  return (
    <div className='w-full h-full bg-[#00001A] px-[20px] py-[40px] md:px-[30px] flex flex-col gap-3'>
        <div>
            <h1 className='text-4xl text-[#E9AB53] font-extrabold  '>New</h1>
        </div>
        <div>
            <ul className=''>
                {newSection.map((news)=> (
                    <li key={news.title} className='pb-7 pt-6 last:border-b-0 border-b-2 border-[#5D5F79]'>
                        <h2 className='text-[#FFFDFA] text-2xl leading-10 '>{news.title}</h2>
                        <p className='text-[#C5C6CE]'>{news.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
