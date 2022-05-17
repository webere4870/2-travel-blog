import React from 'react'


function Listing(props)
{
    console.log(props)
    return (
        <div className='listing'>
            <div>
                <img src={`./../images/${props.item.img}`} alt="" />
            </div>
            <div className='rightDiv'>
                <div className='rowFlex'>
                    <i class="fas fa-map-marker-alt"></i><h2>{props.item.location}</h2>
                    {props.item.googleMaps ? <a href={props.item.googleMaps}target="_blank">View on Google Maps</a> : <h2>Map unavailable</h2>}
                </div>
                <h1 className='name'>{props.item.name}</h1>
                <h1 className='date'>{props.item.date}</h1>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}

export default Listing