const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = new express();

const PORT = process.env.PORT || 5000;

// Init MiddleWare
app.use(logger);

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
