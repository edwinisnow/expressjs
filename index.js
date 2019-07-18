const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
var exphbs = require('express-handlebars');

const members = require('./Members');

const app = new express();

const PORT = process.env.PORT || 5000;

// Init MiddleWare
app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

// Hanldebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//  Home page route
app.get('/', function(req, res) {
  res.render('index', { title: 'Member App', members });
});

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
