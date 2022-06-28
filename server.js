const express = require('express');
const { Http2ServerRequest } = require('http2');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;   // connect to your port 3001
const fs = require('fs');
const notes = require('./Develop/db/db.json');
const uuid = require('./Develop/utils/utils');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static('public'));

app.get('/api/notes',(req,res) => {
    res.json(notes);
});


app.get('/notes',(req,res) => {
    res.sendFile(path.join(__dirname,'./Develop/public/notes.html'));
})


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./Develop/public/index.html'));
})


app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'./Develop/public/index.html'));
})




// The following HTML routes should be created:

// GET /notes should return the notes.html file.

// GET * should return the index.html file.

// The following API routes should be created:

// GET /api/notes should read the db.json file and return all saved notes as JSON.

// POST /api/notes should receive a new note to save on the request body, 
// add it to the db.json file, and then return the new note to the client. 
// You'll need to find a way to give each note a unique id when it's saved 
// (look into npm packages that could do this for you).





// // followed along with instructor info taking from activity 7 as well






// // paths will not collide and can have the same route because the run on different methods
// app.post('/api/notes',(req,res) => {
//     res.json(req.body);
// // this push context from the body to notes

// const updateNote = { ...req.body, id: uuid() };
//     notes.push(req.body);

//     fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
//         err ? res.json(err) : res.send('success');
//     });
// });


// app.delete('/api/notes/:id', (req,res) => {
//  const filteredNotes = notes.filter(note => note.id === id);

// });

// app.use(express.json());
// app.use(expres.urlencoded({ extended: true}));

// app.use(express.static('public'));
// app.use(baseRoutes);

app.listen(PORT, function() {
    console.log(`app is listening at http://localhost:${PORT}`);
});
