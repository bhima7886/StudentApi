const Student = require("../model/student");


async function createStudent(studentData) {
    try {
        const student = new Student(studentData);
        await student.save();
        return student;
    }
    catch (err) {
        console.log("Error")
    }
}

async function getStudentData() {
    try {
        const student = await Student.find();
        return student;
    }
    catch (err) {
        console.log(err);
    }
}

async function getStudentDataById(studentId) {
    try {
        const student = await Student.findById(studentId)
        return student;
    }
    catch (err) {
        console.log(err);
    }
}

async function updateStudentData(studentId, studentData) {
    try {
        const student = await Student.findByIdAndUpdate(studentId, studentData, { new: true });
        return student;

    }
    catch (err) {
        console.log(err);
    }
}

async function deleteStudentData(studentId) {
    try {
        await Student.findByIdAndRemove(studentId);

    }
    catch (error) {
        console.log("Record is not deleted");
    }
}

module.exports = {
    createStudent,
    getStudentData,
    getStudentDataById,
    updateStudentData,
    deleteStudentData,
}