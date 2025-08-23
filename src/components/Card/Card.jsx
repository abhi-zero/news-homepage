import React from 'react'

export default function Card(
  imgUrl,
  title,
  body,
  num
) {
  return (
    <div className='grid grid-cols-2'>
      <div
        className='col-start-1'
      >
        <img src={imgUrl} alt={title} />
      </div>
      <div
        className='col-start-2'
      >
        <h2>{num}</h2>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>

    </div>
  )
}

