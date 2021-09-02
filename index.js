const dbSetup = require('./db/db-setup');
const express = require('express');
const Person = require('./db/models/person');
const Subject = require('./db/models/subject');

dbSetup();

const app = express();
app.use(express.json());

app.get('/person/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const person = await Person.query().findById(id);
        res.json(person);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

app.get('/subject/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const subject = await Subject.query().findById(id);
        res.json(subject);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

app.listen(8080, () => console.log('Server running on port 8080'));