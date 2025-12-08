const path = require('path');
const fs = require('fs');const dataFilePath = path.join(__dirname, '../data/students.json');
// Helper to read file
function readStudentsData() {
 if (!fs.existsSync(dataFilePath)) {
 fs.writeFileSync(dataFilePath, JSON.stringify([]));
}
const data = fs.readFileSync(dataFilePath);
 return JSON.parse(data);
}
// Controller functions
exports.getAllStudents = (req, res) => {
 const students = readStudentsData();
 res.render('index', { students });
};
exports.submitStudent = (req, res) => {
 const { name, age, feedback, grade, rollNo, score, passedYear } = req.body; const newStudent = {
 id: rollNo,
 name,
 age,
 feedback,
 grade,
 score: grade === '12' ? score : null,
 passedYear
 }; const students = readStudentsData();
 const existing = students.find(s => s.id == rollNo); if (existing) {
 return res.status(400).send('Roll number already exists');
 } students.push(newStudent);
 fs.writeFileSync(dataFilePath, JSON.stringify(students, null, 2)); res.redirect('/');
};
exports.deleteStudent = (req, res) => {
 const rollNo = req.params.rollNo;
 let students = readStudentsData();
 students = students.filter(student => student.id != rollNo);
 fs.writeFileSync(dataFilePath, JSON.stringify(students, null, 2));
 res.redirect('/');
};
exports.searchStudent = (req, res) => {
const rollNo = req.query.rollNo;
 const students = readStudentsData();
 const student = students.find(student => student.id == rollNo);
if (student) {
 res.render('student-found', { student });
 } else {
 res.status(404).send('Student Not Found');
 }
};
