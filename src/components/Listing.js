import React from 'react'

function Listing(props)
{
    console.log(props)
    return (
        <div className='listing'>
            <h1>{props.item.img}</h1>
            <h2>{props.item.location}</h2>
            <h1>{props.item.name}</h1>
            <h1>{props.item.date}</h1>
            <p>{props.item.description}</p>
        </div>
    )
}

export default Listing