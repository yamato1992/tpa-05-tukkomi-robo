const getRandomTukkomi = require('./get-random-tukkomi');
const express = require('express');

const tukkomiRoboRouter = express.Router();

tukkomiRoboRouter.get('/', (req, res) => {
  const { phrase } = req.query;
  console.log('phrase = ', phrase);

  if (!phrase) {
    res.status(500).send('Phrase is null. Please input a phrase.');
  } else {
    res.send(getRandomTukkomi());
  }
});

module.exports = tukkomiRoboRouter;
