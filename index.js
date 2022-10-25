const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
const courses = require('./courses_data/courses.json');

app.get('/', (req, res) => {
    res.send(courses);
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const seletedCourse = courses.find(course => course.id === id);
    res.send(seletedCourse);
});

app.listen(port, () => {
    console.log('Server started successfully');
});