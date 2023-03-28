import React from 'react'
import {useState} from 'react'
import Edit from './Edit'

const Car = (props) => {
    const [edit, setEdit] = useState(false)

    const toggleEdit = () => {
        setEdit(!edit)
    }

    return(
        <div>
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
                    <h3>{props.car.name}</h3>
                    <img src = {props.car.image}/>
                    <p>Type: {props.car.type}</p>
                    <p>Year: {props.car.year}</p>
                    <hr/>
                    <button onClick = {() => {toggleEdit()}}>Edit</button>
                </>}
        </div>
    )
}

export default Car