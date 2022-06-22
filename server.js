const espress =require('express');
const path =require('path');
const fs = require('fs');

const uuid = require('');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(expres.urlencoded({ extended: true}));

app.use(express.static('public'));
app.use(baseRoutes);

app.listen(PORT,() =>
console.log('App listening at http://localhost:${PORT}')

)
