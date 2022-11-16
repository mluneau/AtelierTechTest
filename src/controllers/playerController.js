const PlayersService = require('../services/playersService');

exports.getPlayers = (req, res) => {
    const players = PlayersService.getPlayers().sort((a,b) => a.rank - b.rank);
    res.status(200).json(players);
};

exports.getPlayerById = (req, res) => {
    const id = req.params.id;
    const player = PlayersService.getPlayerById(id);

    player ? res.status(200).json(player) : res.status(404).json({
        message: "Error 404: Player not found" 
    })
};
