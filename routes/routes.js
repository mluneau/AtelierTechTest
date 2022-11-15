const playerRoutes = require('./players');

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        res.send("L'atelier technical test.");
    });

    playerRoutes(app, fs);
};

module.exports = appRouter;
