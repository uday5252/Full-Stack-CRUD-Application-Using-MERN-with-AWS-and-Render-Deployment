
const Express = require("express")
const Cors = require("cors")
const Mongoose = require("mongoose")
const app = Express()

app.use(Express.urlencoded())
app.use(Cors())
app.use(Express.json())

// JSON Format --> Javascript Object

// json()

// const output = await fetch("http://api.quotable.io/random")
// const resukt = await output.json()
// json() --> jsonData ===> Javascript Object(Quotes info)
// end point --> function which actually collect the data from the front end

Mongoose.connect("mongodb://localhost:27017/studentdatabase")

//Create a Blueprint/Schema

const StudentSchema = new Mongoose.Schema({
    "rollNo": {
        type: Number,
        required: true
    },
    "name": {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    "age": {
        type: Number,
        required: true,
    },
    "city": {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        // validate: {
        //     validator: function(info)
        //     {
        //         if(info.length < 3)
        //         {
        //             return 
        //         }
        //     }
        // }
    }

})

const StudentModel = Mongoose.model("students", StudentSchema)

app.post("/collect", function(req, res)
{
    //Logic to collect the data from the front end and create it in the database
    const myRollNo =  req.body.rollNo
    const myName =  req.body.name
    const myAge =  req.body.age
    const myCity =  req.body.city

    //Save/Insert the data
    const studentData = new StudentModel({
        "rollNo": myRollNo,
        "name": myName,
        "age": myAge,
        "city": myCity
    })

    studentData.save().then(function(output)
    {
        res.status(201).send(`Data is successfully saved!`)
    }).catch(function(error)
    {
        res.send(`Data is not saved!Please try again!`)
    })
})

app.get("/read", async function(req, res)
{
    const readData = await StudentModel.find()
    res.send(readData)
})

app.post("/read/data", async function(req, res)
{
    const id = req.body.studentId
    const studentData = await StudentModel.find({rollNo: id})
    res.send(studentData)
})

app.listen(9000, function()
{
    console.log("Server is running on the port 3000!")
})

// Status Code --> Tells the status of the response

// If data is created by the server --> post --> If creation is successfull in the database --> post  
// If post --> has asuccessfully created the data --> 201(successful)
// Post --> create the same data again --> 409(Resource already exists)
// Post --> 400(bad request) --> invalid data

// If the data is read from the database by the server --> get ==> successfull(200) | not successfull(404) not found

// If the data is updated by the server in the database --> put/patch ==> updation is successfull(200) || 400
// If the data is deleted by the server from the database --> delete ==> deletion is successfull(204) || 404