const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');

const app = new express();

const PORT = process.env.PORT || 5000;

// Init MW
app.use(logger);

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// route
app.use('/api/members', (req, res) => res.json(members));

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
