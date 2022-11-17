const data = require('../data/headtohead.json');
const Player = require('../models/Player');
const { BMICalc, medianHeightCalc } = require('./statsCalculations');


class StatsService {
    static getStats() {
        const players = data.players;
        const stats = {
            highestCountryWinrate: this.getHighestCountryWinrate(players),
            meanBMI: this.getMeanBMI(players),
            medianHeight: this.getMedianHeight(players)
        }

        return stats;
    }

    static getHighestCountryWinrate(players) {
        return 1;
    }

    static getMeanBMI(players) {
        const totalBMI = players
            .map((player) => BMICalc(new Player(player).height, new Player(player).weight))
            .reduce((a, b) => a + b, 0);
        
        return (totalBMI / players.length);
    }

    static getMedianHeight(players) {
        const heights = players.map((player) => new Player(player).height);
        
        return medianHeightCalc(heights);
    }
}

module.exports = StatsService;
