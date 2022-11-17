const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');
const statsController = require('../controllers/statsController');

router.get('/players', playerController.getPlayers);
router.get('/players/:id', playerController.getPlayerById);
router.get('/stats', statsController.getStats);

module.exports = router;
