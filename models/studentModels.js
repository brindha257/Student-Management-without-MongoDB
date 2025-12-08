const fs = require('fs');
const path = require('path');
//  JSON file
const dataFilePath = path.join(__dirname, '../data/students.json');
// Function to read data from the JSON file
exports.readStudentsData = () => {
 try {
 const data = fs.readFileSync(dataFilePath, 'utf8');
 return JSON.parse(data); // Parse JSON data
 } catch (err) {
 console.log('Error reading file:', err);
 return []; // Return empty array if file is not found or empty
 }
};
// Function to write data to the JSON file
exports.writeStudentsData = (data) => {
 try {
 fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
 } catch (err) {
 console.log('Error writing to file:', err);
 }
};

