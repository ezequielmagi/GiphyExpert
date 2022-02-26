import React, { useState } from 'react'
import { AddCategories } from './AddCategories'

export const GiphyExpert = () => {

    const [categories, setCategories] = useState(['GoshtBusters', 'X-MEN', 'Tom & Jerry'])

  return (
      <>
        <h1>Gif Expert App</h1>
        <AddCategories setCategories={setCategories}/>
        <hr></hr>
        <ul>
            {
                categories.map( categorie => {
                    return <li key={categorie}> { categorie } </li>
                } )
            }
        </ul>
      </>
  )
}
