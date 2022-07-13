import React from 'react'
function Form({ type, text }) {
  return (
        <div>
            <div className='child-container'>
                <label htmlFor={type}>{text}</label>
                <input type={type} id={type}  />
            </div>
        </div>
  )
}

export default Form