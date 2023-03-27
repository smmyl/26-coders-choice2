import {useState} from 'react'
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
        axios.post('http://localhost:3000/cars').then(() => {
            props.getCars()
        })
    }
    return (
        <>
            <h2>New Car for Sale</h2>
            <form onSubmit = {handleAddCar}>
                <input type = 'text' name = 'name' placeholder = 'name' required onChange = {handleName}/><br/>
                <input type = 'text' name = 'image' placeholder = 'image url' required onChange = {handleImage}/><br/>
                <input type = 'text' name = 'type' placeholder = 'type' required onChange = {handleType}/><br/>
                <input type = 'text' name = 'Year' placeholder = 'make year' required onChange = {handleYear}/><br/>
                <input type = 'submit' value = 'SUBMIT'/>
            </form>
        </>
    )
}

export default Add;