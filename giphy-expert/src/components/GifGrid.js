import React, { useEffect, useState } from 'react'

export const GifGrid = ({ category }) => {

    const [counter, setCounter] = useState(0);

    useEffect( () => {
        getGifs()
    }, [] )

    const getGifs = async() => {
        
        const url = 'https://api.giphy.com/v1/gifs/search?q=GhostBusters&limit=10&api_key=7e8Dfw8fdC1bzCK2XqHnHcPzqk96N9Lj'
        const resp = await fetch( url )
        const { data } = await resp.json()

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        }

         )

        console.log(gifs)
    }



  return (
    <div>
        <h3>{ category }</h3>
        <p> { counter } </p>
        <button onClick={ () => setCounter(counter + 1) } > + </button>
    </div>
  )
}
