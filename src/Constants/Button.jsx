import React from 'react'

const Button = ({name}) => {
  return (
    <button className='bg-white rounded-full w-full p-2 text-black'>
        {name}
    </button>
  )
}

export default Button