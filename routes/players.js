const playerRoutes = (app, fs) => {

    const url = './data/headtohead.json';

    const readFile = (
        callback,
        returnJson = false,
        filePath = url,
        encoding = 'utf-8'
    ) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (
        fileData,
        callback,
        filePath = url,
        encoding = 'utf-8'
    ) => {
        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback;
        });
    };


    app.get('/players', (req, res) => {
        readFile((data) => {
            res.send(data);
        }, true);
    });    
};

module.exports = playerRoutes;
