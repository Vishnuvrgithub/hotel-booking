import React from 'react'
import './Checkinsub.css'

const checkinsub = ({heading,data,btntxt}) => {
  return (
    <div>
      <div className='checkdetials'><div><label>{data.name}</label> {data.place}<br></br>{data.date}</div> <div>{data.id}</div> <div><button id='btn'>{btntxt}</button></div></div>
    </div>
  )
}

export default checkinsub
