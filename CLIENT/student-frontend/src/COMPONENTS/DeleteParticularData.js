import React from 'react'
import { useParams } from 'react-router-dom'
import Axios from "axios"
import { SERVER_ACCESS_URL } from '../constans'

function DeleteParticularData() 
{
    const [ message, setMessage ] = React.useState("")

    //Logic to extract the rollNo
    const { id } = useParams()
    
    Axios.delete(`${SERVER_ACCESS_URL}/delete/data/${id}`)
    .then(function(output)
    {
        setMessage(output.data)
    })
    .catch(function(error)
    {
        console.log(error)
    })

    // http://localhost:9000/delete/data/1
    // http://localhost:9000/delete/data/2

    return (
        <div>
            {message}
        </div>
    )
}

export default DeleteParticularData