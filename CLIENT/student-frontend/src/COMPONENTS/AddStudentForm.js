import React from 'react'
import "../AddStudentForm.css"
import Axios from "axios"
import { SERVER_ACCESS_URL } from '../constans'

const AddStudentForm = () => 
{
    const [ message, setMessage] = React.useState("")

    const [ formData, setFormData ] = React.useState({
        rollNo: "",
        name: "",
        age: "",
        city: ""
    })
    

    function collectData(event)
    {
        setFormData({...formData, [event.target.name] : event.target.value})
    }

    // {rollNo: '1', name: 'Raju', age: '10', city: 'Bangalore'} --> Server --> Create/Save this data in the database

    async function displayData(event)
    {
        event.preventDefault()//Stop the entire page from getting reloaded, because javascript forms normally reload
        // the entire page after form submission
        
        //LOGIC TO SEND THE DATA TO THE SERVER(/collect)
       const result = await Axios.post(`${SERVER_ACCESS_URL}/collect`, formData )
       console.log(result)
    //    setMessage(result)
        // formData(Javascript Object) --> JSON Format --> Reaching the server
    }

    // javascript object and json(keys)

    // CORS (Cross Origin Request Sharing)
  return (
    <div class="container">
        <form onSubmit={displayData}>
            <label for="rollNo">Roll Number:</label>
            <input type="text" id="rollNo" name="rollNo" onChange={collectData}/>

            <label for="name">Name:</label>
            <input type="text" id="name" name="name" onChange={collectData}/>

            <label for="age">Age:</label>
            <input type="number" id="age" name="age" onChange={collectData}/>

            <label for="city">City:</label>
            <input type="text" id="city" name="city" onChange={collectData}/>

            <input type="submit" value="Submit"/>

            {message}
        </form>
    </div>
  )
}

export default AddStudentForm