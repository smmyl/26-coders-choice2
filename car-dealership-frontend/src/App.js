import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import Car from './components/Car'
import Add from './components/Add'

const App = () => {
  //Declare cars
  const[cars, setCars] = useState ([])
  //Boolean for add statement
  const[add, setAdd] = useState(false)

  //Get data for cars from the backend
  const getCars = () => {
    axios.get('http://localhost:3002/cars').then((response) => {
      setCars(response.data)
    })
  }
  
  //Delete function for cars
  const handleDelete = (data) => {
    axios.delete(`http://localhost:3002/cars/${data._id}`).then(() => {
      axios.get('http://localhost:3002/cars').then((response) => {
        setCars(response.data)
      })
    })
  }

  const addCar = () => {
    setAdd(!add)
  }
 
  useEffect(() => {
    getCars()
  }, [])

  return(
    <>
      <h1>Cars</h1>
      <Add
        getCars = {getCars}
      />
      {cars.map((car) => {
        return(
          <Car 
            car = {car}
            setCars = {setCars}
            getCars = {getCars}
            handleDelete = {handleDelete}
          />
        )
      })}
    </>
  )
}

export default App;
