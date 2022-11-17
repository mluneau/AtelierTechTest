const data = require('../data/headtohead.json');
const Player = require('../models/Player');
const { playerRatio, countryRatioCalc, BMICalc, medianHeightCalc } = require('./statsCalculations');

class StatsService {
    static getStats() {
        const players = data.players;
        const stats = {
            highestCountryWinrate: this.getHighestCountryWinrate(players),
            meanBMI: this.getMeanBMI(players),
            medianHeight: this.getMedianHeight(players)
        }

        //console.log(stats);
        return stats;
    }

    static getHighestCountryWinrate(players) {
        
        const highestCountryWinrate = players
            .map(player => {
                return {
                    code: player.country.code,
                    name: player.country.name,
                    ratio: playerRatio(player.data.last)
                };
            });
        // Missing country ratio addition when multiple players (e.g. USA)
        return highestCountryWinrate.sort((a, b) => b.ratio - a.ratio)[0];    
    }

    static getMeanBMI(players) {
        const totalBMI = players
            .map(player => BMICalc(new Player(player).height, new Player(player).weight))
            .reduce((a, b) => a + b, 0)
        
        //console.log(totalBMI);
        return (totalBMI / players.length);
    }

    static getMedianHeight(players) {
        const heights = players.map((player) => new Player(player).height);
        
        //console.log(heights);
        return medianHeightCalc(heights);
    }
}

module.exports = StatsService;
