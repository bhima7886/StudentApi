const express=require("express");
const cors=require("cors");
require("../src/db/conn");
const bodyParser=require("body-parser");
const router = require("./router/student.router");


/*async function createStudent(req, res) {
    try {
        const student = await studentService.createStudent(req.body);
        res.status(201).json(student);
    }
    catch (err) {
        res.status(500).json({ err: err.message })
    }
}
*/

const app=express();
const PORT=3000;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors());
app.use(router);
app.listen(PORT,()=>{
    console.log(`Server is running on port no ${PORT}`);
})

/*app.post('/student/add-record11',function(req,res){
    console.log("eerrrr");
});
*/