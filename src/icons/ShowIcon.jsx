import React from 'react'

const ShowIcon = (props) => {
  return (
    <>
    
    <svg
    width={800}
    height={800}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0h48v48H0z" fill="none" />
    <circle cx={24} cy={24} r={4} />
    <path d="M24 38c12 0 20-14 20-14s-8-14-20-14S4 24 4 24s8 14 20 14zm0-22a8 8 0 1 1 0 16 8 8 0 0 1 0-16z" />
  </svg>
    </>
  )
}

export default ShowIcon