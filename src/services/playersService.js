const data = require('../data/headtohead.json');
const Player = require('../models/Player');

class PlayersService {
    static getPlayers() {
        const players = data.players.map((player) => {
            return new Player(player);
        });
        
        return players;
    }

    static getPlayerById(id) {
        const player = data.players.find((player) => id == player.id);

        return player ? new Player(player) : null;
    }
}

module.exports = PlayersService;
