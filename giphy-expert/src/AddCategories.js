import React, { useState } from 'react'

export const AddCategories = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setCategories( cat => [...cat , inputValue] )
        setInputValue('')
    }

  return (
      <form onSubmit={handleSubmit}>
          <input 
            type='text'
            value={inputValue}  
            onChange={handleInputChange}
          ></input>
      </form>
  )
}
