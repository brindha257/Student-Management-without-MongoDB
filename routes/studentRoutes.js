const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');// Routes
router.get('/', studentController.getAllStudents);
router.post('/submit-student',studentController.submitStudent);
router.post('/delete-student/:rollNo',studentController.deleteStudent);
router.get('/search-student',studentController.searchStudent);
module.exports = router;
