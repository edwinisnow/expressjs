const express = require('express');

const app = new express();

const PORT = process.env.PORT || 5000;

app.use('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
