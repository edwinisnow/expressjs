const express = require('express');
const members = require('../../Members');

const router = express.Router();
// Get Single Member
router.get('/:id', (req, res) => {
  //   res.send(req.params.id);
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No members found with id: ${req.params.id}` });
  }
});

// Get All Members
router.use('/', (req, res) => res.json(members));

module.exports = router;
