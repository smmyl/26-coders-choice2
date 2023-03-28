import React from 'react'
import {useState} from 'react'
import axios from 'axios'

const Edit = (props) => {
    const [newName, setNewName] = useState(props.car.name)
    const [newImage, setNewImage] = useState(props.car.image)
    const [newType, setNewType] = useState(props.car.type)
    const [newYear, setNewYear] = useState(props.car.year)

    const handleNameUpdate = (event) => {
        setNewName(event.target.value)
    }
    const handleImageUpdate = (event) => {
        setNewImage(event.target.value)
    }
    const handleTypeUpdate = (event) => {
        setNewType(event.target.value)
    }
    const handleYearUpdate = (event) => {
        setNewYear(event.target.value)
    }
    const handleEdit = (event) => {
        event.preventDefault()
        axios.put(`http://localhost:3000/cars/${props.car._id}`, {
            name: newName,
            image: newImage,
            type: newType,
            year: newYear
        }).then (() => {
            props.getCars()
        })
    }
    return (
        <div class = 'edit-form'>
            <form id = 'editForm' onSubmit = {handleEdit}>
                <label htmlFor = 'name'>Name:</label>
                <input type = 'text' name = 'name' placeholder = {props.car.name} onChange = {handleNameUpdate}/><br/><br/>
                <label htmlFor = 'image'>Image URL:</label>
                <input type = 'text' name = 'image' placeholder = {props.car.image} onChange = {handleImageUpdate}/><br/><br/>
                <label htmlFor = 'type'>Type:</label>
                <input type = 'text' name = 'type' placeholder = {props.car.type} onChange = {handleTypeUpdate}/><br/><br/>
                <label htmlFor = 'year'>Year:</label>
                <input type = 'text' name = 'year' placeholder = {props.car.year} onChange = {handleYearUpdate}/><br/><br/>
            </form>
            <button class = 'edit-btn' type = 'submit' form = 'editForm'>UPDATE</button><br/>
            <button class = 'edit-btn' onClick = {() => {props.handleDelete(props.car)}}>DELETE</button><br/>
            <button class = 'edit-btn' onClick = {() => {props.toggleEdit()}}>Cancel</button>
        </div>
    )
}

export default Edit