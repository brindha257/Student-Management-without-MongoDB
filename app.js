const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const studentRoutes = require('./routes/studentRoutes');const app = express();app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', studentRoutes);
const PORT = 3000;
app.listen(PORT, () => {
     console.log(`Server running at http://localhost:${PORT}`);
});
