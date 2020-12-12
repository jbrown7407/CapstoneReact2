import React from 'react'



export default function Card() {
    const pic = "url.image.com"
    const restName = "Arby's"
    const restLink = "url.rest.com"
    const meal = "burger"
    const id = "9"

    return (
        <div>
            Card
           Pic <img>{pic}</img>
           RestName: <h1>{restName}</h1>
           Link: <h1>{restlink}</h1>
           Meal <h3>{meal}</h3>
           ID: <h3>{id}</h3>
        
        </div>
    )
}
