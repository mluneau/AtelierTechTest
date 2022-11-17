const StatsService = require('../services/statsService');

exports.getStats = (req, res) => {
    const stats = StatsService.getStats();
    res.status(200).json(stats);
};
