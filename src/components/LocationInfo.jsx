import React from 'react'
import './styles/locationinfo.css'


const LocationInfo = ({location}) => {

    console.log(location);

  return (
    <article className='card__info'>
        
        <ul className='card__info-ul'>
            <li><h2 className='card__info-name'><span>Nombre: </span>{location?.name}</h2></li>
            <li className='card__info-li'><span>Type: </span>{location?.type}</li>
            <li className='card__info-li'><span>Dimension: </span>{location?.dimension}</li>
            <li className='card__info-li'><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo