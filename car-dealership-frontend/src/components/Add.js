import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Add = (props) => {
    const [name, setName] = useState()
    const [image, setImage] = useState()
    const [type, setType] = useState()
    const [year, setYear] = useState()

    //Update data with Form
    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleImage = (event) => {
        setImage(event.target.value)
    }
    const handleType = (event) => {
        setType(event.target.value)
    }
    const handleYear = (event) => {
        setYear(event.target.value)
    }
    //Send data to Database with submit
    const handleAddCar = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/cars', {
            name: name,
            image: image,
            type: type,
            year: year
        }).then(() => {
            props.setAdd(false)
            props.getCars()
        })
    }
    return (
        <div class = 'add-cont'>
            <form onSubmit = {handleAddCar}>
                <label htmlFor = 'name'>Name:</label>
                <input type = 'text' name = 'name' placeholder = 'name' required onChange = {handleName}/><br/><br/>
                <label htmlFor = 'image'>Image URL:</label>
                <input type = 'text' name = 'image' placeholder = 'image url' required onChange = {handleImage}/><br/><br/>
                <label htmlFor = 'type'>Type:</label>
                <input type = 'text' name = 'type' placeholder = 'type' required onChange = {handleType}/><br/><br/>
                <label htmlFor = 'year'>Year:</label>
                <input type = 'text' name = 'Year' placeholder = 'make year' required onChange = {handleYear}/><br/><br/>
                <input type = 'submit' value = 'SUBMIT'/>
            </form>
        </div>
    )
}

export default Add;