const mongoose = require('mongoose');
module.exports = {
    mongoose,
    connect: (uri) => {
        if (uri) {
            mongoose.connect(uri, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true
            }, (err) => {
                if (err) {
                    console.error(err.name, ':', err.message);
                } else {
                    console.log('\x1b[32m%s\x1b[0m', 'MONGODB CONNECTED')
                }
            })
        } else {
            console.error('\x1b[31m%s\x1b[0m', 'ERROR: MONGODB CONNECTION FAILED.');
            console.warn('\x1b[33m%s\x1b[0m', 'You need pass a valid MONGODB URI in a .env file/server.js')
        }
    },
    disconnect: (done) => {
        mongoose.disconnect(done);
    }
}