import {useState} from 'react'
import axios from 'axios'

const Edit = (props) => {
    const [newName, setNewName] = useState(props.car.name)
    const [newImage, setNewImage] = useState(props.car.name)
    const [newType, setNewType] = useState(props.car.name)
    const [newYear, setNewYear] = useState(props.car.name)

    const handleNameUpdate = (event) => {
        setNewName(event.target.value)
    }
    const handleImageUpdate = (event) => {
        setNewName(event.target.value)
    }
    const handleTypeUpdate = (event) => {
        setNewName(event.target.value)
    }
    const handleYearUpdate = (event) => {
        setNewName(event.target.value)
    }
    const handleEdit = (event) => {
        event.preventDefault()
        axios.put(`http://localhost:3002/cars/${props.animal._id}`, {
            name: newName,
            image: newImage,
            type: newType,
            year: newYear
        }).then (() => {
            props.getCars()
        })
    }
    return (
        <div>
            <form id = 'editForm' onSubmit = {handleEdit}>
                <input type = 'text' name = 'name' placeholder = {props.car.name} onChange = {handleNameUpdate}/><br/>
                <input type = 'text' name = 'image' placeholder = {props.car.image} onChange = {handleImageUpdate}/><br/>
                <input type = 'text' name = 'type' placeholder = {props.car.type} onChange = {handleTypeUpdate}/><br/>
                <input type = 'text' name = 'year' placeholder = {props.car.year} onChange = {handleYearUpdate}/><br/>
            </form>
            <button type = 'submit' form = 'editForm'>UPDATE</button>
            <button onClick = {() => {props.handleDelete(props.animal)}}>DELETE</button>
        </div>
    )
}

export default Edit