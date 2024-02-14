import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from "axios"
import { SERVER_ACCESS_URL } from '../constans'

function EditStudentData() 
{
  const info = {
    rollNo: "",
    name: "",
    age: "",
    city: ""
}

    const [ fetchedData, setFetchedData ] = React.useState(info) 

    const [ formData, setFormData ] = React.useState({
      rollNo: "",
      name: "",
      age: "",
      city: ""
})


  //Logic to get the student data
  const { id } = useParams()//id = 1
  

  useEffect(function()
  {
    Axios.get(`${SERVER_ACCESS_URL}/read/data/${id}`)
    .then(function(output)
    {
      console.log(output.data)
        output.data.map(function(i)
        {
            setFetchedData(...i)
            // console.log(i.rollNo, i.name, i.age, i.city)
        })
        // setData(output.data)
    })
    .catch(function(error)
    {
        console.log(error)
    })
  })

  

// form data ==> updated details

  function collectData(event)
  {
    console.log(event)
    //Logic to collect the data and store it, then we can send to the expresss server
    setFormData({...formData, [event.target.name] : event.target.value})
    // setFormData((prevData)=>[...prevData,{[event.target.name]:event.target.value}]})
  }

  function sendData()
  {
    console.log("hi")
  }

  return (
    <div>
        <h4>Student Edit Form</h4>
         <div className='row'>
            <div className='col-md-6'>
            <form onSubmit={sendData}>
            <label for="rollNo">Roll Number:</label>
            <input type="text" name="rollNo" value={fetchedData.rollNo} onChange={collectData}/>

            <label for="name">Name:</label>
            <input type="text" name="name" value={fetchedData.name} onChange={collectData}/>

            <label for="age">Age:</label>
            <input type="number" name="age" value={fetchedData.age} onChange={collectData}/>

            <label for="city">City:</label>
            <input type="text"  name="city" value={fetchedData.city} onChange={collectData}/>

            <input type="submit" value="Submit" />

        </form>
            </div>

         </div>
    </div>
  )
}

export default EditStudentData