// exporting DB info to be used in server.js
exports.DATABASE_URL = 
                        process.env.DATABASE_URL ||
                        global.DATABASE_URL ||
                        'mongodb://localhost/spoiledveggies';

// exporting PORT info for local or remote
exports.PORT = (process.env.PORT || 8080);