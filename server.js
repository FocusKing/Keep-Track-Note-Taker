const espress =require('express');
const path =require('path');
const fs = require('fs');
const notes = require('./Develop/db');
const uuid = require('uuid');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(expres.urlencoded({ extended: true}));

app.use(express.static('public'));
// followed along with instructor
app.get('/notes',(req,res) => {
    res.sendFile(path.join(_dirname,'public/index.html'));
})

app.get('/',(req,res) => {
    res.sendFile(path.join(_dirname,'public/index.html'));
})


app.get('/api/notes',(req,res) => {
    res.json(notes);
});
// paths will not collide and can have the same route because the run on different methods
app.post('/api/notes',(req,res) => {
    res.json(req.body);
// this push context from the body to notes

const updateNote = { ...req.body, id: uuid() };
    notes.push(req.body);

    fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
        err ? res.json(err) : res.send('success');
    });
});


app.delete('/api/notes/:id', (req,res) => {
 const filteredNotes = notes.filter(note => note.id === id);

});

// app.use(express.json());
// app.use(expres.urlencoded({ extended: true}));

// app.use(express.static('public'));
// app.use(baseRoutes);

app.listen(PORT);
