import React from 'react'

const Types = ({item}) => {
  return (
    <>
    <div className='inline-block px-2 py-2 '>
        <input  type='checkbox'/>
        <label className='px-1 font-semibold' htmlFor={item.name}>{item.name}</label>
    </div>

    </>
  )
}

export default Types