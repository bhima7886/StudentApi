const express=require("express");
const router=express.Router();
const controller=require("../controller/student.controller");

router.post("/student/add-record",controller.createStudent);
router.get("/student/get-record",controller.getStudentData);
router.get("/student/get-recordOne/:studentId",controller.getStudentDataById);
router.put("/student/update-record/:studentId",controller.updateStudentData);
router.delete("/student/delete-record/:studentId",controller.deleteStudentData);


module.exports=router;