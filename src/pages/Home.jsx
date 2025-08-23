import React from 'react'
import { HeroNews, NewArticles} from '../components'

const Home = () => {
  return (
    <div className='max-w-[1440px] m-auto px-[30px] md:grid md:grid-cols-2  lg:grid-cols-3 gap-5'>
     <div className='md:col-start-1  lg:col-start-1 lg:col-end-3'>
      <HeroNews />
     </div>
     <div className='md:col-start-2 lg:col-start-3'>
        <NewArticles />
     </div>
     
    </div>
  )
}

export default Home