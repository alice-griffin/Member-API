const express = require('express');
const path = require('path');
const app = express(); 
const exphbs = require('express-handlebars');
const logger = require('./logger');
const members = require('./members');

//handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//homepage route
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members
}));

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//members API routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on ${PORT}`));


//json APIs connect with angular




