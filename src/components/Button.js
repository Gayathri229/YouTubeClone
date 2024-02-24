import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-gray-200 px-4 py-1 m-1 font-semibold rounded-lg whitespace-nowrap'>{name}</button>
    </div>
  )
}

export default Button