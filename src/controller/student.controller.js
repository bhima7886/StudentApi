const studentService = require("../service/student.service");

async function createStudent(req, res) {
    try {
        const student = await studentService.createStudent(req.body);
        res.status(201).json(student);
    }
    catch (err) {
        res.status(500).json({ err: err.message })
    }
}
async function getStudentData(req, res) {
    try {
        const student = await studentService.getStudentData();
        res.status(201).json(student);
    }
    catch (err) {
        res.status(500).json({ err: err.message })
    }
}
async function getStudentDataById(req, res) {
    try {
        const student = await studentService.getStudentDataById(req.params.studentId);
        res.status(201).json(student);
        if (!student) {
            return res.status(404).json({ error: "No Student Record" });
        }
        res.json(student);
    }
    catch (err) {
        res.status(500).json({ err: err.message })
    }
}
async function updateStudentData(req, res) {
    try {
        const student = await studentService.updateStudentData(req.params.studentId, req.body);
        res.status(201).json(student);
        console.log(req.body);
        if (!student) {
            return res.status(404).json({ error: "No Student Record" })
        }
        res.json(student);
    }
    catch (err) {
        res.status(err);
    }
}
async function deleteStudentData(req,res)
{
    try{
        await studentService.deleteStudentData(req.params.studentId);
        res.status(204).json("Record deleted successfully")
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}
module.exports = {
    createStudent,
    getStudentData,
    getStudentDataById,
    updateStudentData,
    deleteStudentData,
}