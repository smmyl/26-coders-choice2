import React from 'react'
import {useState} from 'react'
import Edit from './Edit'

const Car = (props) => {
    const [edit, setEdit] = useState(false)

    const toggleEdit = () => {
        setEdit(!edit)
    }

    return(
        <div class = 'container'>
            {edit ?
                <Edit
                    toggleEdit = {toggleEdit}
                    setEdit = {setEdit}
                    car = {props.car}
                    handleDelete = {props.handleDelete}
                    getCars = {props.getCars}
                />
                :
                <>
                    <h3 class = 'key'>{props.car.name}</h3>
                    <img class = 'show-img' src = {props.car.image}/>
                    <p><span class = 'key'>Type:</span> {props.car.type}</p>
                    <p><span class = 'key'>Year:</span> {props.car.year}</p>
                    <hr/>
                    <button id = 'edit-btn' onClick = {() => {toggleEdit()}}>Edit</button>
                </>}
        </div>
    )
}

export default Car