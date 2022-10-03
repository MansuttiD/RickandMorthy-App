import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResidents from './components/CardResidents'
import FilterList from './components/FilterList'
import LocationInfo from './components/LocationInfo'
import ErrorScreen from './components/ErrorScreen'
import getRandomNumber from './utils/getRandomNumber'
import video from '../src/video.mp4'

function App() {
  // Para guardar una location
  const [location, setLocation] = useState()

  // Para guardar la info del input y hacer la peticion cuando se hace el submit
  const [searchImput, setSearchImput] = useState('')

  // Para guardar las sugerencias de auto completado en la api
  const [suggestedList, setSuggestedList] = useState()

  // Para indicar si hay error o no al buscar
  const [hasError, setHasError] = useState(false)



  useEffect(() => {
    let id = getRandomNumber()
    
    if (searchImput) {
      id = searchImput
    }

    const URL = `https://rickandmortyapi.com/api/location/${id}`

    axios.get(URL)
    .then(res => {
      setHasError(false)
      setLocation(res.data)
    })
    .catch(err => setHasError(true))

  }, [searchImput])


  
  const handleSubmit = event => {
    event.preventDefault()
    setSearchImput(event.target.idLocation.value)
  }
  
  const handleChange = event => {

    if (event.target.value === '') {
      return setSuggestedList()
    } 

    const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`

    axios.get(URL)
    .then(res => setSuggestedList(res.data.results))
    .catch(err => console.log(err))
  }
  

  return (
    <div className="App">

      <div className='header'>

      <h1 className='header__title'>Rick And Morty App</h1>
          <form className='header__form' onSubmit={handleSubmit}>
            <input 
            className='input'
            id='idLocation'
            placeholder='Choose a planet' 
            onChange={handleChange}
            type="text" />
 
            <FilterList 
            suggestedList={suggestedList}
            setSearchImput = {setSearchImput}
           />
          </form>
      </div>
      

      {
        hasError ?
          <ErrorScreen />
      :
        <>
      <LocationInfo location={location} />

      <div className='card-container'>
        {
          location?.residents.map(url => (
            <CardResidents
            key={url} 
            url={url}
            />
          ))
        }
      </div>
        </>
      }
    </div>
  )
}

export default App
