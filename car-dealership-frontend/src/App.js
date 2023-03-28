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
    axios.get('http://localhost:3000/cars').then((response) => {
      setCars(response.data)
    })
  }
  
  //Delete function for cars
  const handleDelete = (data) => {
    axios.delete(`http://localhost:3000/cars/${data._id}`).then(() => {
      axios.get('http://localhost:3000/cars').then((response) => {
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
      <h1>Exotic Dealership</h1>
      {add ?
      <>
        <h2>New Car for Sale</h2>
        <button id = 'add-btn' onClick = {addCar}>Go Back</button>
        <Add
          getCars = {getCars}
          setAdd = {setAdd}
        />
      </>
      :
      <>
          <h2>Cars for Sale</h2>
          <hr/>
          <hr/>
          <button onClick = {addCar}>Add Car </button>
        <div class = 'cards'>
          {cars.map((car) => {
            return(
              <div class = 'card'>
                <Car 
                  car = {car}
                  setCars = {setCars}
                  getCars = {getCars}
                  handleDelete = {handleDelete}
                />
              </div>
            )
          })}
        </div>
        </>}
        <hr/>
        <hr/>
        <div class = 'footer'>
          <p>Owned by Sammy Liao & Devorius Harris</p>
        </div>
    </>
  )
}

export default App;
