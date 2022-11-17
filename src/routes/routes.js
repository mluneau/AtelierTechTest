const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');
const statsController = require('../controllers/statsController');

router.get('/', (req, res) => {
    res.status(200).json({
        message:`Welcome to this tennis api!`
    });
})

router.get('/players', playerController.getPlayers);
router.get('/players/:id', playerController.getPlayerById);
router.get('/stats', statsController.getStats);


module.exports = router;
