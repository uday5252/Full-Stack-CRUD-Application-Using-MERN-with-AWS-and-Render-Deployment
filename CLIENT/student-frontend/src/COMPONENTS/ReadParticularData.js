import React from 'react'
import { useParams } from 'react-router-dom'
import Axios from "axios"
import { SERVER_ACCESS_URL } from '../constans'

function ReadParticularData() 
{
    console.log("hi")
    //Extract that ID

    const [ particularStudentData, setParticularStudentData ] = React.useState([])

    const { id } = useParams()
    
    React.useEffect(function()
    {
        Axios.get(`${SERVER_ACCESS_URL}/read/data/${id}`)
        .then(function(output)
        {
            setParticularStudentData(output.data)
        }).catch(function(error)
        {
            console.log(error)
        })
    }, [])
    
    return (
        <div>
            {
                particularStudentData.map(function(i)
                {
                    return <div>
                        <h3>{i.rollNo}</h3>
                        <h3>{i.name}</h3>
                        <h3>{i.age}</h3>
                        <h3>{i.city}</h3>
                    </div>
                })
            }
        </div>
    )
}

export default ReadParticularData