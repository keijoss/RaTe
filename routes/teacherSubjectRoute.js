const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middlewares/authMiddleware");

const teacherSubjectController = require("../controllers/teacherSubjectController");
router.get("/teacherSubjects", authenticateToken, teacherSubjectController.Get.multipleTeacherSubject);
router.get("/teacherSubjects/:id", authenticateToken, teacherSubjectController.Get.singleTeacherSubject);
router.post("/teacherSubjects", authenticateToken, teacherSubjectController.Post.singleTeacherSubject);
router.put("/teacherSubjects/:id", authenticateToken, teacherSubjectController.Put.singleTeacherSubject);
router.delete("/teacherSubjects/:id", authenticateToken, teacherSubjectController.Delete.singleTeacherSubject);

module.exports = router;