import React from 'react'
import './styles/filterlist.css'


const FilterList = ({suggestedList,  setSearchImput}) => {

    const handleClick = id =>  setSearchImput(id)


  return (
    <ul className='list__ul'>
        {
            suggestedList?.map(location => (
                <li onClick={() => handleClick(location.id)} key={location.id}>{location.name}</li>
            ))
        }
    </ul>

    
  )
}

export default FilterList