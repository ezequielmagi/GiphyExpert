import React, { useState } from 'react'
import { AddCategories } from './components/AddCategories'
import { GifGrid } from './components/GifGrid'

export const GiphyExpert = () => {

    const [categories, setCategories] = useState(['GoshtBusters'])

  return (
      <>
        <h1>Gif Expert App</h1>
        <AddCategories setCategories={setCategories}/>
        <hr></hr>
        <ul>
            {
                categories.map( category => 
                    <GifGrid 
                        key={category}    
                        category={category} 
                    />
                )
            }
        </ul>
      </>
  )
}
