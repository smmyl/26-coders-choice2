import {useState} from 'react'
import Edit from './Edit'

const Car = (props) => {
    // const [edit, setEdit] = useState(false)

    // const toggleEdit = () => {
    //     setEdit(!edit)
    // }

    return(
        <div>
            <h3>{props.car.name}</h3>
            <img src = {props.car.image}/>
            <p>Type: {props.car.type}</p>
            <p>Year: {props.car.year}</p>
            <Edit
                car = {props.car}
                handleDelete = {props.handleDelete}
                getCars = {props.getCars}
            />
               <hr/>
        </div>
    )
}

export default Car